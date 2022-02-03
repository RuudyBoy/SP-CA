const url ="http://localhost:8085/home";
const heroBanner = document.querySelector(".herobanner");

    async function getProducts() {
	try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const products = data;

        for (let i = 0; i < products.length; i++) {

            if (i === 1) {
                break;
            } 
            heroBanner.innerHTML += ` 
            <div class="image"> <img src="${products[i].hero_banner.url}" />
            <p> ${products[i].id} </p></div>`;
        } 
        
    } catch (error) {
        console.log(error);
    } 
} 

getProducts();

