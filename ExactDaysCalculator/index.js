const fromDateEl = document.getElementById("fromDate");

const toDateEl = document.getElementById("toDate");

const calculateBtn = document.getElementById("calculateBtn");

const daysEl = document.getElementById("days");

const hoursEl = document.getElementById("hours");

const minutesEl = document.getElementById("minutes");

const secondsEl = document.getElementById("seconds");

const errorEl = document.getElementById("error");

calculateBtn.addEventListener("click", function () {
  const fromDate = new Date(fromDateEl.value);

  const toDate = new Date(toDateEl.value);

  if (!fromDateEl.value || !toDateEl.value) {
    errorEl.innerText = "Please select both dates.";

    return;
  }

  if (fromDate > toDate) {
    errorEl.innerText = "From Date cannot be greater than To Date.";

    return;
  }

  errorEl.innerText = "";
  const difference = toDate.getTime() - fromDate.getTime();
  const second = 1000;

  const minute = second * 60;

  const hour = minute * 60;

  const day = hour * 24;

  const days = Math.floor(difference / day);

  const hours = Math.floor((difference % day) / hour);

  const minutes = Math.floor((difference % hour) / minute);
  const seconds = Math.floor((difference % minute) / second);

  daysEl.innerText = days;

  hoursEl.innerText = hours;

  minutesEl.innerText = minutes;

  secondsEl.innerText = seconds;
});
