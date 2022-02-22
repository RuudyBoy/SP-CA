
import { getExistingProducts } from "./utils/productFunctions.js";
import createMenu from "./common/createMenu.js";




const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);


const url ="http://localhost:8085/products/" + id;
createMenu();

const productDetails = document.querySelector(".spesific-product");



async function fetchDetails () {
    try {

        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        //<i class="far fa-heart" data-id="${details.id}" data-title="${details.title}"></i>
       

        productDetails.innerHTML += 
        `<div class="product-details"> 
         <h2> ${details.title} </h2>
         <p> ${details.description} </p>
         <p> $${details.price} </p>
         <a class="cta-button fa" data-id="${details.id}" data-title="${details.title}" > Add to cart</a>
         <a class="cta-button far" data-id="${details.id}" data-title="${details.title}" > Remove from cart</a>
        </div>`;


const addToCart = document.querySelectorAll(".product-details a");
console.log(addToCart);

addToCart.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick(event) {
    console.log(event)
    event.target.classList.toggle("fa");
    event.target.classList.toggle("far");
    const id = this.dataset.id;
    const title = this.dataset.title;

    console.log("title", title);
    
    const currentProducts = getExistingProducts();
     

    const productExists = currentProducts.find(function(product) {
        return product.id === id;
    });

    if (productExists === undefined) {
        
        const product = {id: id, title: title};
        currentProducts.push(product);
        saveproducts(currentProducts);
    }
    else {
        const newproducts = currentProducts.filter((product) => product.id !== id);
        saveproducts(newproducts);
    }

}

function saveproducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}
}

    catch (error) {
     console.log("error");
     productDetails.innerHTML = "An error has occured :("
 }
}

fetchDetails ();