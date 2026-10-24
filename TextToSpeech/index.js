function speak() {
    let text = document.getElementById("text").value;

    if (text.trim() === "") {
        alert("Please enter some text!");
        return;
    }

    let speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}

function stop() {
    window.speechSynthesis.cancel();
}