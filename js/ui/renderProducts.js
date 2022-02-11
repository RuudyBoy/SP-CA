export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");
   

    productsToRender.forEach(function (product) {
        productContainer.innerHTML += ` 
        <div class="product"> 
        <h2> ${product.title}</h2>
        <p> $${product.price} </p>
        <a class="readMore" href="productdetails.html?id=${product.id}"> More details</a></div>`;
    });

}
















/*async function getProducts() {
	try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        for (let i = 0; i < data.length; i++) {

            productContainer.innerHTML += ` 
            <div class="product"> 
            <h2> ${data[i].title}</h2>
            <img class = "img" src="${data[i].image.formats.large.hash}" alt="myImage">
            <p> $${data[i].price} </p>
            <a class="readMore" href="productdetails.html?id=${data[i].id}"> More details </a> </div>`;
        } 
        
    } catch (error) {
        console.log(error);
    } 
} 

getProducts();

function searchProducts(products) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {

        console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProducts = products.filter(function (data) {
            if (data.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        getProducts(filteredProducts);
    };
}
*/ 