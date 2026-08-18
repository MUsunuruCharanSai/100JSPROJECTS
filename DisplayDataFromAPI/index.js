const productsDiv = document.getElementById("products");

async function getProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();

    data.products.forEach((product) => {
      productsDiv.innerHTML += `
                        <div class="product">
                            <img src="${product.thumbnail}" alt="${product.title}">
                            <h3>${product.title}</h3>
                            <p>Price: $${product.price}</p>
                        </div>
                    `;
    });
  } catch (error) {
    console.log(error);
  }
}

getProducts();
