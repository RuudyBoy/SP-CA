import { baseUrl } from "../settings/api.js";

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


        productContainer.innerHTML += ` 
        <div class="product"> 
        <h2> ${product.title}</h2>
        <p> $${product.price} </p>
        <img class"img" src="${img}">
        <a class="cta-button" href="productdetails.html?id=${product.id}"> More details</a>
        <a class="cta-button" href="edit.html?id=${product.id}"> Edit product</a></div>`;
    });

}
