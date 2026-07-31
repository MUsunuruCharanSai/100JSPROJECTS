const api = `275d58779ccf4e22af03e792e8819fff`;
let recipe_list = document.getElementById("recipe-list");

function loadData(recipe) {
  recipe_list.innerHTML = "";
  recipe.forEach((item) => {
    recipe_list.innerHTML += `
        <li id="each-recipe">
            <img src="${item.image}" alt="${item.name}" width="250">

            <h2>${item.name}</h2>

            <p><strong>Cuisine:</strong> ${item.cuisine}</p>
            <p><strong>Difficulty:</strong> ${item.difficulty}</p>
            <p><strong>Rating:</strong> ⭐ ${item.rating} (${item.reviewCount} reviews)</p>
            <p><strong>Prep Time:</strong> ${item.prepTimeMinutes} mins</p>
            <p><strong>Cook Time:</strong> ${item.cookTimeMinutes} mins</p>
            <p><strong>Servings:</strong> ${item.servings}</p>
            <p><strong>Calories:</strong> ${item.caloriesPerServing} kcal</p>

            <h3>Ingredients</h3>
            <ul>
                ${item.ingredients
                  .map(
                    (ingredient) => `
                    <li>${ingredient}</li>
                `,
                  )
                  .join("")}
            </ul>

            <h3>Instructions</h3>
            <ol>
                ${item.instructions
                  .map(
                    (step) => `
                    <li>${step}</li>
                `,
                  )
                  .join("")}
            </ol>
        </li>
    `;
  });
}
async function getData() {
  let response = await fetch(`https://dummyjson.com/recipes`);
  let data = await response.json();
  return data.recipes;
}

async function init() {
  const recipe = await getData();
  loadData(recipe);
}
init();
