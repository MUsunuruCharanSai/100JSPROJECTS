let liked = false;
let likes = 0;

const likeBtn = document.getElementById("likeBtn");
const count = document.getElementById("count");

likeBtn.addEventListener("click", function () {

    if (liked) {
        likes--;
        likeBtn.textContent = "👍 Like";
        liked = false;
    } else {
        likes++;
        likeBtn.textContent = "👎 Unlike";
        liked = true;
    }

    count.textContent = likes + " Likes";
});