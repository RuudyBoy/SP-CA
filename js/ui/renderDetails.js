/*import logoutButton from "../common/clearButton.js";
import { getExistingFavs } from "../utils/favFunctions.js";
const favourites = getExistingFavs();
productDetails.innerHTML +=  `<button id="logout"> Clear All</button>`;




export function renderDetails() {
    const productDetails = document.querySelector(".spesific-product");
    productDetails.innerHTML = "";
    productDetails.innerHTML +=  `<button id="logout"> Clear All</button>`;

    favourites.forEach((product) => {
        productDetails.innerHTML += ` 
        <div class="product"> 
        <h2> ${product.title}</h2>
        <p> $${product.price} </p>
        <i class="fa fa-star"></i>`;
        logoutButton();
    });

}*/