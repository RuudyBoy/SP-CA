export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");

    productsToRender.forEach(function (product) {
        productContainer.innerHTML += ` 
        <div class="product"> 
        <h2> ${product.title}</h2>
        <p> $${product.price} </p>
        <a class="cta-button" href="productdetails.html?id=${product.id}"> More details</a>
        <a class="cta-button" href="edit.html?id=${product.id}"> Edit product</a></div>`;
    });

}
