const quotes = [
{
text: "The secret of getting ahead is getting started.",
author: "Mark Twain"
},
{
text: "It always seems impossible until it's done.",
author: "Nelson Mandela"
},
{
text: "Success is not final, failure is not fatal.",
author: "Winston Churchill"
},
{
text: "The only way to do great work is to love what you do.",
author: "Steve Jobs"
},
{
text: "Don't watch the clock; do what it does. Keep going.",
author: "Sam Levenson"
}
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("new-quote-btn");

function generateQuote() {
const randomIndex = Math.floor(Math.random() * quotes.length);

```
const randomQuote = quotes[randomIndex];

quoteElement.textContent = `"${randomQuote.text}"`;
authorElement.textContent = `— ${randomQuote.author}`;
```

}

button.addEventListener("click", generateQuote);
