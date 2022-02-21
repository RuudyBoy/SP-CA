import { getExistingFavs } from "./utils/favFunctions.js";
import createMenu from "./common/createMenu.js";

createMenu();

const favourites = getExistingFavs();

const cartContainer = document.querySelector(".cart");

favourites.forEach((cart) => {
    cartContainer.innerHTML += `<div class="cart-product">
    <h4>${cart.title}</h4>
    <p> ${cart.price} </p>
    <a href="products.html"> Products view</a>
    <i class="fa fa-heart"></i>
</div>`;    
});