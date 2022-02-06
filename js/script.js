const url ="http://localhost:8085/home";
const heroBanner = document.querySelector(".herobanner");

    async function getProducts() {
	try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        for (let i = 0; i < data.length; i++) {

            heroBanner.innerHTML += ` 
            <div class="image"> <img src="${data[i].hero_banner.url}" />
            <p> ${data[i].id} </p></div>`;
        } 
        
    } catch (error) {
        console.log(error);
    } 
} 

getProducts();
