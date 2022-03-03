
import { getExistingProducts } from "./utils/productFunctions.js";
import createMenu from "./common/createMenu.js";
//import { baseUrl } from "./settings/api.js";




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

       /* let img ="";

        if(details.image) {
            img = baseUrl+ details.image.url;
        }
        if (details.image_url) {
            img = details.image_url;
        } */  

        productDetails.innerHTML += 
        `<div class="product-details"> 
         <img class"details-image" src="${details.image_url}">
         <div class="details"> 
         <h1> ${details.title} </h1> 
         <hr>
         <p class="price"> $${details.price} </p>
         <p class="details-text"> ${details.description} </p>
         <div class="product-size"><p class="size">S</p> <p class="size">M</p> <p class="size" >L</p> <p class="size">XL</p></div>
         <a class="cta-button fa" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" data-image="${details.image_url}"> Add to cart</a>
         </div> 
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
    const price = this.dataset.price;
    const image = this.dataset.image;

    console.log("title", title);
    console.log(price);
    
    const currentProducts = getExistingProducts();
     

    const productExists = currentProducts.find(function(product) {
        return product.id === id;
    });

    if (productExists === undefined) {
        
        const product = {id: id, title: title, price: price, image_url: image};
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