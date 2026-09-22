let time = 0;
let interval;

function startTimer() {

    if (time === 0) {
        time = Number(document.getElementById("seconds").value);
    }

    if (time <= 0) {
        return;
    }

    clearInterval(interval);

    interval = setInterval(() => {

        time--;

        showTime();

        if (time === 0) {
            clearInterval(interval);
            alert("Time's up!");
        }

    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {

    clearInterval(interval);

    time = 0;

    document.getElementById("seconds").value = "";

    document.getElementById("timer").innerText = "00:00";
}

function showTime() {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("timer").innerText =
        `${minutes}:${seconds}`;
}