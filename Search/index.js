const products = [
    {
        title: "iPhone 15",
        price: 70000
    },
    {
        title: "Samsung Galaxy S24",
        price: 65000
    },
    {
        title: "Nike Shoes",
        price: 5000
    },
    {
        title: "Sony Headphones",
        price: 12000
    }
];

const productsDiv = document.getElementById("products");
const searchInput = document.getElementById("search");
function displayProducts(list) {
    productsDiv.innerHTML = "";
    list.forEach(product => {
        productsDiv.innerHTML += `
            <div class="product">
                <h3>${product.title}</h3>
                <p>₹${product.price}</p>
                <button>Add to Cart</button>
            </div>
        `;

    });
}

displayProducts(products);
searchInput.addEventListener("input", function () {
    const value = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(value)
    );

    displayProducts(filteredProducts);
});