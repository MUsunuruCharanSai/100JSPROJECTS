
const form = document.getElementById("reviewForm");
const stars = document.querySelectorAll("#stars span");
const reviewList = document.getElementById("reviewList");

let rating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    rating = Number(star.dataset.rating);

    stars.forEach((item) => {
      item.classList.toggle(
        "active",
        Number(item.dataset.rating) <= rating
      );
    });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const review = document.getElementById("review").value.trim();

  if (rating === 0) {
    alert("Please select a star rating!");
    return;
  }

  if (!name || !review) {
    alert("Please fill in all fields!");
    return;
  }

  const card = document.createElement("div");
  card.className = "review-card";

  const heading = document.createElement("h3");
  heading.textContent = name;

  const starText = document.createElement("div");
  starText.className = "review-stars";
  starText.textContent = "★".repeat(rating) + "☆".repeat(5 - rating);

  const reviewText = document.createElement("p");
  reviewText.textContent = review;

  card.append(heading, starText, reviewText);
  reviewList.prepend(card);

  form.reset();
  rating = 0;
  stars.forEach((star) => star.classList.remove("active"));

  alert("Review submitted successfully!");
});
