const btn = document.getElementById("btn");
const container = document.getElementById("anime-container");
const img = document.getElementById("anime-img");
const name = document.getElementById("anime-name");

btn.addEventListener("click", async () => {
  btn.disabled = true;
  btn.innerText = "Loading...";

  try {
    const response = await fetch("https://nekos.best/api/v2/neko");

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    console.log("API Response:", data);

    const imageUrl = data.results[0].url;

    console.log("Image URL:", imageUrl);

    container.style.display = "block";

    img.src = imageUrl;

    name.innerText = "Random Anime";
  } catch (error) {
    console.error("Error:", error);

    container.style.display = "block";
    name.innerText = "Something went wrong!";
  } finally {
    btn.disabled = false;
    btn.innerText = "Get Anime";
  }
});
