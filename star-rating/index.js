let stars = document.querySelectorAll(".stars span");

function rate(number) {

    stars.forEach((star, index) => {

        if (index < number) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }

    });

    document.getElementById("rating").innerText =
        "You rated " + number + " out of 5";
}

function resetRating() {

    stars.forEach(star => {
        star.classList.remove("active");
    });

    document.getElementById("rating").innerText =
        "Select a rating";
}