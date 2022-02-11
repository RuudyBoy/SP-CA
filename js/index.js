import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
//import { getExistingFavs } from "./utils/favFunctions.js";
//import { createHTML } from "./productdetails.js";

const url ="http://localhost:8085/products/";


async function getProducts() {
	try {
        const response = await fetch(url);
        const products = await response.json();
        console.log(products);

       

        renderProducts(products);
        searchProducts(products);
        //createHTML(products);

        
    } catch (error) {
        console.log(error);
    } 
} 

getProducts();