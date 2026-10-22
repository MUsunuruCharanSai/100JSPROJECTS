
let interval;
let audioContext;
let oscillator;

document.getElementById("setAlarm").addEventListener("click", function () {
    clearInterval(interval);

    // Stop any previous alarm
    stopSound();

    let seconds = Number(document.getElementById("seconds").value);

    if (!Number.isFinite(seconds) || seconds <= 0) {
        alert("Please enter valid seconds!");
        return;
    }

    // Create audio after the user clicks
    audioContext = new (window.AudioContext || window.webkitAudioContext)();

    audioContext.resume();

    document.getElementById("message").textContent = "";

    function updateTimer() {
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;

        document.getElementById("timer").textContent =
            String(minutes).padStart(2, "0") + ":" +
            String(remainingSeconds).padStart(2, "0");
    }

    updateTimer();

    interval = setInterval(function () {
        seconds--;

        updateTimer();

        if (seconds <= 0) {
            clearInterval(interval);

            document.getElementById("message").textContent =
                "⏰ Alarm is ringing!";

            playSound();
        }
    }, 1000);
});

function playSound() {
    oscillator = audioContext.createOscillator();
    let gain = audioContext.createGain();

    oscillator.type = "square";
    oscillator.frequency.value = 880;

    gain.gain.value = 0.2;

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();

    // Stop automatically after 5 seconds
    oscillator.stop(audioContext.currentTime + 5);

    oscillator.onended = function () {
        oscillator = null;
    };
}

function stopSound() {
    if (oscillator) {
        try {
            oscillator.stop();
        } catch (error) {}
        oscillator = null;
    }
}
