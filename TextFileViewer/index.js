function loadData() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "demo.txt", true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      document.getElementById("demo").innerText = xhr.responseText;
    } else {
      document.getElementById("demo").innerText = "File not found";
    }
  };
  xhr.send();
}
