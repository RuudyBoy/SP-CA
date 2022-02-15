//import logoutButton from "./common/clearButton.js";
import { getExistingFavs } from "./utils/favFunctions.js";



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
       

        productDetails.innerHTML += 
        `<div class="product-details"> 
         <h2> ${details.title} </h2>
         <p> ${details.description} </p>
         <p> $${details.price} </p>
         <i class="far fa-heart" data-id="${details.id}" data-title="${details.title}"></i>
        </div>`;


const favButtons = document.querySelectorAll(".product-details i");
console.log(favButtons);

favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick(event) {
    console.log(event)
    event.target.classList.toggle("fa");
    event.target.classList.toggle("far");
    const id = this.dataset.id;
    const title = this.dataset.title;

    console.log("title", title);
    
    const currentFavs = getExistingFavs();
     

    const articleExists = currentFavs.find(function(fav) {
        return fav.id === id;
    });

    if (articleExists === undefined) {
        
        const article = {id: id, title: title};
        currentFavs.push(article);
        saveFavs(currentFavs);
    }
    else {
        const newFavs = currentFavs.filter((fav) => fav.id !== id);
        saveFavs(newFavs);
    }

}

function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}
}

    catch (error) {
     console.log("error");
     productDetails.innerHTML = "An error has occured :("
 }
}

fetchDetails ();