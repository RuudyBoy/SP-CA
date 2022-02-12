import {getExistingFavs} from "./utils/favFunctions.js";

const favourites = getExistingFavs();

const cartContainer = document.querySelector(".cart");

favourites.forEach((cart) => {

    cartContainer.innerHTML += `<div class="cart-product">
    <h4>${cart.name}</h4>
    <i class="fa fa-heart"></i>
</div>`;    
});