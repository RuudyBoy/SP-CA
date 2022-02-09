const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);


const url ="http://localhost:8085/products/" + id;

const productDetails = document.querySelector(".spesific-product");



async function fetchDetails () {
    try {

        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML(details);

    }
    
    catch (error) {
     console.log("error");
     productDetails.innerHTML = "An error has occured :("
 }
}

fetchDetails ();

function createHTML(details) {

    productDetails.innerHTML = 
    `<div class="product-details"> 
     <h2> ${details.title} </h2>
     <p> ${details.description} </p>
     <p> $${details.price} </p>
     <a class="addToCart" href="cartpage.html"> Add to cart </a>
    </div>`;

}