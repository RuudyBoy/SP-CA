export function getExistingProducts() {
    const products = localStorage.getItem("products");

    if(products === null) {
        return [];
    } else {
        return JSON.parse(products);

    }
}