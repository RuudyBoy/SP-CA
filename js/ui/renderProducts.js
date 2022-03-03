import { baseUrl } from "../settings/api.js";
import { getUsername } from "../utils/storage.js";
import logoutButton from "../common/logoutButton.js";



export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");

    productsToRender.forEach(function (product) {

       /* let img ="";

        if(product.image) {
            img = baseUrl + product.image.url;
        }
        if (product.image_url) {
            img = product.image_url;
        } */

        const { pathname } = document.location;

        const username = getUsername();
    
        let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}"></a>`;
    
        if (username) {
            authLink = `<a class="cta-link" href="edit.html?id=${product.id}">I Edit product </a>`
        }
    
        console.log(username);
    
        productContainer.innerHTML += ` 
        <div class="product"> 
       
        <img class"img" src="${product.image_url}"> 
        <h2> ${product.title}</h2> 
        <p class="price"> $${product.price} </p>
        <a class="cta-link" href="productdetails.html?id=${product.id}"> More details</a>
        ${authLink}</div>`;
    


        
    });

};
