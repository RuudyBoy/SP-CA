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


        let banner ="";

        if(home.hero_banner.url) {
            banner = "http://localhost:8085" + home.hero_banner.url;
        }
        

        heroBanner.innerHTML += 
        `<div class="hero-banner">
         <h1 class="banner-heading"> Be fashionable</h1>
         <img class"banner" src="${banner}">
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
        
        
            for (let i = 0; i < featured.length; i++) { 

            if(featured[i].featured === true) {
            featuredProducts.innerHTML += ` 
            <div class="featured"> 
            <img class"img" src="${featured[i].image_url}">
            <h2> ${featured[i].title}</h2> 
            <p class="price"> $${featured[i].price} </p>
            <a class="cta-button" href="products.html">See more</a>
            </div>`;
        } }
        
    } catch (error) {
        console.log(error);
    } 
} 

getFeatured();

