function changeColor() {
  let colarr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hex = "#";

  for (let x = 0; x < 6; x++) {
    let num = Math.floor(Math.random() * 16);
    hex += colarr[num];
  }

  document.body.style.backgroundColor = hex;
  document.getElementById("colorCode").innerText = hex;
}
