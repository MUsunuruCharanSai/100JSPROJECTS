
const phones = [
    {
        title: "iPhone 17 Pro",
        description: "Power meets perfection. Experience the next level of innovation.",
        price: "From $999",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "iPhone 16",
        description: "Beautiful design. Brilliant camera. Performance you will love.",
        price: "From $799",
        image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=700&q=80"
    }
];

let currentIndex = 0;

function showPhone() {
    document.getElementById("title").textContent =
        phones[currentIndex].title;

    document.getElementById("description").textContent =
        phones[currentIndex].description;

    document.getElementById("price").textContent =
        phones[currentIndex].price;

    document.getElementById("phoneImage").src =
        phones[currentIndex].image;

    document.getElementById("phoneNumber").textContent =
        `0${currentIndex + 1} / 02`;
}

function nextPhone() {
    currentIndex = (currentIndex + 1) % phones.length;
    showPhone();
}

function previousPhone() {
    currentIndex =
        (currentIndex - 1 + phones.length) % phones.length;
    showPhone();
}

function changePhone() {
    nextPhone();
}
