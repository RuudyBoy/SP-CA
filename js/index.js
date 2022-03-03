import createMenu from "./common/createMenu.js";
import { baseUrl } from "./settings/api.js";


const url = baseUrl + "home";
const heroBanner = document.querySelector(".banner");

createMenu();

    async function getBanner() {
	try {
        const response = await fetch(url);
        const home = await response.json();
        console.log(home);


        heroBanner.innerHTML += 
        `<div class="hero-banner"> 
        <p>${home.hero_banner_alt_text}</p>
         <img class"image" src="${home.hero_banner.url}">
        </div>`;
       


        


        
    } catch (error) {
        console.log(error);
    } 
} 

getBanner();


const featuredUrl ="http://localhost:8085/products/";
const featuredProducts = document.querySelector(".featured-products");

    async function getFeatured() {
	try {
        const response = await fetch(featuredUrl);
        const featured = await response.json();
        console.log(featured);

       
             
            for (let i = 0; i < featured.length; i++) { 
                
        let img ="";

        if(featured[i].image) {
            img = baseUrl + featured[i].image.url;
        }
        if (featured[i].image_url) {
            img = featured[i].image_url;
        }

                
            if(featured[i].featured === true) {
            featuredProducts.innerHTML += ` 
            <div class="featured"> 
            <img class"img" src="${img}">
            </div>`;
        } }
        
    } catch (error) {
        console.log(error);
    } 
} 

getFeatured();

