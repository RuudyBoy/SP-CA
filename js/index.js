const url ="http://localhost:8085/home/";
const heroBanner = document.querySelector(".hero-banner");

    async function getBanner() {
	try {
        const response = await fetch(url);
        const home = await response.json();
        console.log(home);

        for (let i = 0; i < home.length; i++) {

            heroBanner.innerHTML += ` 
            <div class="banner"> 
           <div class="image" style="background-image: url('${home[i].hero_banner.formats.large.url}')"> </div>
            <p> ${home[i].hero_banner.size} </p>
            </div>`;
        } 
        
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

            featuredProducts.innerHTML += ` 
            <div class="banner"> 
            <p> ${featured[i].featured} </p>
            </div>`;
        } 
        
    } catch (error) {
        console.log(error);
    } 
} 

getFeatured();

