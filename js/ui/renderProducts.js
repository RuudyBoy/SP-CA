export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");
   

    productsToRender.forEach(function (product) {
        productContainer.innerHTML += ` 
        <div class="product"> 
        <h2> ${product.title}</h2>
        <p> $${product.price} </p>
        <a class="readMore" href="edit.html?id=${product.id}"> More details</a></div>`;
    });

}
