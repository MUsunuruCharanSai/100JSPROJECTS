const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("input", updateCounter);

updateCounter();

function updateCounter() {
  const maxLength = textareaEl.maxLength;
  const currentLength = textareaEl.value.length;

  totalCounterEl.innerText = currentLength;
  remainingCounterEl.innerText = maxLength - currentLength;
}
