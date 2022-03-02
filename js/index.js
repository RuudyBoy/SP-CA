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

       

        home.forEach(function (banner) { 
            
        let img ="";

        if(banner.image) {
            img = baseUrl+ banner.hero_banner.url;
        }
        if (banner.image_url) {
            img = banner.hero_banner.image_url;
        }

        heroBanner.innerHTML += 
        `<div class="hero-banner"> 
         <img class"image" src="${img}">
        </div>`;
        });


        


        
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

