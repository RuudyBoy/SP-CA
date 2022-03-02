import { getExistingProducts } from "./utils/productFunctions.js";
import createMenu from "./common/createMenu.js";
import { baseUrl } from "./settings/api.js";

createMenu();

const productsInCart = getExistingProducts();

const cartContainer = document.querySelector(".cart");

productsInCart.forEach((cart) => {

    console.log(cart);

    let img ="";

        if(cart.image) {
            img = baseUrl + cart.image.url;
        }
        if (cart.image_url) {
            img = cart.image_url;
        }

    cartContainer.innerHTML += `<div class="cart-product">
    <h4>${cart.title}</h4>
    <img class"img" src="${img}">
    <p> ${cart.price} </p>
    <a class="cta-button" href="products.html" > Products view</a>
</div>`;    
});