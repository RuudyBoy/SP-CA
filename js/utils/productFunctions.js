export function getExistingProducts() {
    const products = localStorage.getItem("products");
    console.log(products);

    if(products === null) {
        return [];
    } else {
        return JSON.parse(products);

    }
}