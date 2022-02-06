const url ="http://localhost:8085/products";
const productContainer = document.querySelector(".product-container");

    async function getProducts() {
	try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        for (let i = 0; i < data.length; i++) {

            productContainer.innerHTML += ` 
            <div class="image"> <img src="${data[i].image.url}" />
            <p> ${data[i].price} </p></div>`;
        } 
        
    } catch (error) {
        console.log(error);
    } 
} 

getProducts();
