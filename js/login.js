import { baseUrl } from "./settings/api.js";
import displayMessage from "./common/displayMessage.js";
import { saveToken, saveUser } from "./utils/storage.js";
import createMenu from "./common/createMenu.js";

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

createMenu();


form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "Email/password is incorrect. Please try again.", ".message-container");
    }

    doSignin(usernameValue, passwordValue);
}

async function doSignin(username, password) {
    const url = baseUrl + "auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        console.log(json);

        if (json.user) {
            displayMessage("success", "You are signed in!", ".message-container");

            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "products.html";
        }

        if (json.error) {
            displayMessage("warning", "Invalid signin details", ".message-container");
        }

        console.log(json);
    } catch (error) {
        console.log(error);
    }
}