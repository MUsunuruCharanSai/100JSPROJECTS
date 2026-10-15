const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const color = document.getElementById("color");
const size = document.getElementById("size");
const clear = document.getElementById("clear");

canvas.width = 700;
canvas.height = 400;

let drawing = false;

canvas.addEventListener("pointerdown", (e) => {
  drawing = true;
  canvas.setPointerCapture(e.pointerId);

  const rect = canvas.getBoundingClientRect();

  ctx.beginPath();
  ctx.moveTo(
    (e.clientX - rect.left) * canvas.width / rect.width,
    (e.clientY - rect.top) * canvas.height / rect.height
  );
});

canvas.addEventListener("pointermove", (e) => {
  if (!drawing) return;

  const rect = canvas.getBoundingClientRect();

  ctx.lineTo(
    (e.clientX - rect.left) * canvas.width / rect.width,
    (e.clientY - rect.top) * canvas.height / rect.height
  );

  ctx.strokeStyle = color.value;
  ctx.lineWidth = size.value;
  ctx.lineCap = "round";
  ctx.stroke();
});

canvas.addEventListener("pointerup", () => {
  drawing = false;
});

canvas.addEventListener("pointercancel", () => {
  drawing = false;
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});