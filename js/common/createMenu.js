import { getUsername } from "../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
    const { pathname } = document.location;

    const container = document.querySelector(".menu-container");

    const username = getUsername();

    let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

    if (username) {
        authLink = `<a href="add.html" class="${pathname === "/add.html" ? "active" : ""}">Add Product</a>
        <button id="logout"> Logout ${username}</button>`;
    }

    console.log(username);

    container.innerHTML = `<div class="menu">
                                <img class="logo" src="../../img/SP2-logo64px.png" alt="Fashionable logo" >
                                <a href="index.html" class="${pathname === "/" || pathname === "index.html" ? "active" : ""}">Home</a> 
                                <a href="products.html" class="${pathname === "/" || pathname === "products.html" ? "active" : ""}">Products</a>
                                <a href="cartpage.html" class="${pathname === "/" || pathname === "cartpage.html" ? "active" : ""}">Cart</a>
                                ${authLink}
                        </div>`;

    logoutButton();
}