import { getExistingProducts } from "./utils/productFunctions.js";
import createMenu from "./common/createMenu.js";

createMenu();

const productsInCart = getExistingProducts();

const cartContainer = document.querySelector(".cart");

productsInCart.forEach((cart) => {
    cartContainer.innerHTML += `<div class="cart-product">
    <h4>${cart.title}</h4>
    <p> ${cart.price} </p>
    <a class="cta-button" href="products.html" > Products view</a>
</div>`;    
});