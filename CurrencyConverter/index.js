let result = document.getElementById("result");
const API_KEY = "uUDZMfP8tbYiWFpWQX7hJ3cBAWXOmYYo";

async function convertCurrency(e) {
  e.preventDefault();
  let amount = document.getElementById("amount").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let url = `https://api.apilayer.com/exchangerates_data/convert?from=${from}&to=${to}&amount=${amount}`;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      apikey: API_KEY,
    },
  });
  let data = await response.json();
  result.innerText = data.result.toFixed(2);
}
convert.addEventListener("click", convertCurrency);
