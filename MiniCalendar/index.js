const date = new Date();

document.getElementById("month").innerText = date.toLocaleString("en", {
  month: "long",
});

document.getElementById("day").innerText = date.toLocaleString("en", {
  weekday: "long",
});

document.getElementById("date").innerText = date.getDate();
document.getElementById("year").innerText = date.getFullYear();
