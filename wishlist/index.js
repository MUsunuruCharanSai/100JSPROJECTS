let count = 0;

function toggleWishlist(button) {

    if (button.innerText === "♡ Wishlist") {
        button.innerText = "♥ Added";
        count++;
    } else {
        button.innerText = "♡ Wishlist";
        count--;
    }

    document.getElementById("count").innerText = count;
}