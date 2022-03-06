import { baseUrl } from "./settings/api.js";
import displayMessage from "./common/displayMessage.js";
import createMenu from "./common/createMenu.js";
import { getToken } from "./utils/storage.js";
import deleteButton from "./common/products/deleteButton.js"

const token = getToken();

if (!token) {
    location.href = "/";
}

createMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const image = document.querySelector("#urlInput");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");

(async function () {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        idInput.value = details.id;

        deleteButton(details.id);

        console.log(details);
    } catch (error) {
        console.log(error);
    } finally {
        form.style.display = "block";
    }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";


    const titleValue = title.value.trim();
    const imageValue = image.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const idValue = idInput.value;

    if (titleValue.length === 0 ||  imageValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");
    }

    updateProduct(titleValue, imageValue, priceValue, descriptionValue, idValue);
}

async function updateProduct(title, image, price, description, id) {
    const url = baseUrl + "products/" + id;
    const data = JSON.stringify({ title: title, image_url:image, price: price, description: description });

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };


    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if (json.updated_at) {
            displayMessage("success", "Product updated", ".message-container");
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }
    } catch (error) {
        console.log(error);
    }
}