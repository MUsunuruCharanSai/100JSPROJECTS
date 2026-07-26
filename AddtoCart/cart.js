const products = [
  {
    productLink:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    productName: "iPhone 15 Pro",
    price: 129999,
  },
  {
    productLink:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    productName: "Nike Air Max",
    price: 8999,
  },
  {
    productLink:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    productName: "Sony WH-1000XM5 Headphones",
    price: 29999,
  },
  {
    productLink:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    productName: "Apple Watch Series 9",
    price: 42999,
  },
];
products.forEach((item, index) => {
  let parent = document.getElementById("product");
  if(parent){
  let element = document.createElement("div");
  element.id = "sub-product";
  element.innerHTML = `
            <img src="${item.productLink}">
            <h2>${item.productName}</h2>
            <h3>₹${item.price}</h3>
            <button onclick="addCart(${index})">Add to Cart</button>
`;
  parent.appendChild(element);
  }
});

let count = document.getElementById('cart-count')
if(count){
let cart = JSON.parse(localStorage.getItem('cart')) || []
count.innerText=cart.length;
}



function addCart(index) {
    let cart=JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(products[index])
    localStorage.setItem('cart',JSON.stringify(cart))
    alert("Product Added Sucessfully !")
    count.innerText=cart.length;
}

// Displaying the Added to Cart Items in to Cart Page


let addedItemsdiv = document.getElementById("products-div");
if(addedItemsdiv){
let items = JSON.parse(localStorage.getItem("cart")) || [];

items.forEach((item) => {
    let newEle = document.createElement("div");

    newEle.innerHTML = `
        <img src="${item.productLink}">
        <h2>${item.productName}</h2>
        <h3>₹${item.price}</h3>
    `;

    addedItemsdiv.appendChild(newEle);
});
}


