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
                                <a href="index.html" class="${pathname === "/" || pathname === "/" ? "active" : ""}">Home</a>
                                <a href="products.html" class="${pathname === "/" || pathname === "/" ? "active" : ""}">Products</a>
                                <a href="cartpage.html" class="${pathname === "/" || pathname === "/" ? "active" : ""}">Cart</a>
                                ${authLink}
                        </div>`;

    logoutButton();
}