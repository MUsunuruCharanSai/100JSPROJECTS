function checkLeapYear() {
  const year = Number(document.getElementById("year").value);
  const result = document.getElementById("result");

  if (year === 0 || !year) {
    result.innerText = "Please enter a valid year.";
    return;
  }

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    result.innerText = year + " is a Leap Year.";
  } else {
    result.innerText = year + " is not a Leap Year.";
  }
}
