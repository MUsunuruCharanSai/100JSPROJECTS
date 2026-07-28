let numbers;
function addValue(i) {
  numbers = document.getElementById("input-value").value += i;
}

function getResult() {
  let ans = document.getElementById("answer");
  let result = eval(numbers);
  ans.innerText = result;
}

let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  document.getElementById("input-value").value = "";
  let ans = document.getElementById("answer");
  ans.innerText = "";
});
