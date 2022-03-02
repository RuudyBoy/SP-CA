import { baseUrl } from "../settings/api.js";
import { getUsername } from "../utils/storage.js";
import logoutButton from "../common/logoutButton.js";



export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");

    productsToRender.forEach(function (product) {

        let img ="";

        if(product.image) {
            img = baseUrl + product.image.url;
        }
        if (product.image_url) {
            img = product.image_url;
        }

        const { pathname } = document.location;

        const username = getUsername();
    
        let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}"></a>`;
    
        if (username) {
            authLink = `<a class="cta-button" href="edit.html?id=${product.id}"> Edit product </a>`
        }
    
        console.log(username);
    
        productContainer.innerHTML += ` 
        <div class="product"> 
        <h2> ${product.title}</h2>
        <img class"img" src="${img}"> 
        <p> $${product.price} </p>
        <a class="cta-button" href="productdetails.html?id=${product.id}"> More details</a>
        ${authLink}</div>`;
    


        
    });

};
