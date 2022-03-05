
import { getUsername } from "../utils/storage.js";



export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");

    productContainer.innerHTML="";

    productsToRender.forEach(function (product) {

        const { pathname } = document.location;

        const username = getUsername();
    
        let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}"></a>`;
    
        if (username) {
            authLink = `<a class="cta-link" href="edit.html?id=${product.id}">I Edit product </a>`
        }
        
        console.log(username)
    
        productContainer.innerHTML += ` 
        <div class="product"> 
       
        <img class"img" src="${product.image_url}"> 
        <h2> ${product.title}</h2> 
        <p class="price"> $${product.price} </p>
        <a class="cta-link" href="productdetails.html?id=${product.id}"> More details</a>
        ${authLink}</div>`;
    


        
    });

};
