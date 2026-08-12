let form = document.getElementById("form");
let search = document.getElementById("search");
let search_button = document.getElementById("search-btn");
let results = document.getElementById("results");
let key = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let data = await fetch(
    `https://api.unsplash.com/search/photos?query=${search.value}&client_id=${key}`,
  );
  let response = await data.json();
  console.log(response);
  results.innerHTML = "";
  response.results.forEach((item) => {
    results.innerHTML += `<img class='queried-images' src="${item.urls.small}">`;
  });
});
