async function getQuote() {
  let response = await fetch("https://dummyjson.com/quotes/random");

  let data = await response.json();

  document.getElementById("quote").innerText = `"${data.quote}"`;

  document.getElementById("author").innerText = `— ${data.author}`;
}

function copyQuote() {
  let quote = document.getElementById("quote").innerText;
  let author = document.getElementById("author").innerText;

  navigator.clipboard.writeText(quote + " " + author);

  alert("Quote copied!");
}

function shareQuote() {
  let quote = document.getElementById("quote").innerText;
  let author = document.getElementById("author").innerText;

  navigator.share({
    title: "Random Quote",
    text: quote + " " + author,
  });
}

getQuote();
