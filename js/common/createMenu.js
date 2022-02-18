import { getUsername } from "../utils/storage.js";

export default function createMenu() {
    const { pathname } = document.location;

    const container = document.querySelector(".menu-container");

    const username = getUsername();

    let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

    if (username) {
        authLink = `<a href="add.html" class="${pathname === "/add.html" ? "active" : ""}">Add Product</a>
        <span>Hi ${username}</span>`;
    }

    console.log(username);

    container.innerHTML = `<div class="menu">
                                <a href="products.html" class="${pathname === "/" || pathname === "/products.html" ? "active" : ""}">Products</a>
                                ${authLink}
                        </div>`;
}