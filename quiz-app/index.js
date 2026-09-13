
const questions = [
    {
        question: "What does HTML stand for?",

        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],

        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which language is used to style web pages?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],

        answer: "CSS"
    },

    {
        question: "Which keyword is used to declare a constant in JavaScript?",

        options: [
            "var",
            "let",
            "const",
            "constant"
        ],

        answer: "const"
    },

    {
        question: "Which method is used to add an element to the end of an array?",

        options: [
            "push()",
            "pop()",
            "shift()",
            "add()"
        ],

        answer: "push()"
    },

    {
        question: "Which method converts JSON into a JavaScript object?",

        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.object()"
        ],

        answer: "JSON.parse()"
    },

    {
        question: "What does DOM stand for?",

        options: [
            "Document Object Model",
            "Data Object Model",
            "Document Oriented Module",
            "Digital Object Management"
        ],

        answer: "Document Object Model"
    },

    {
        question: "Which symbol is used for strict equality?",

        options: [
            "=",
            "==",
            "===",
            "!="
        ],

        answer: "==="
    },

    {
        question: "Which function is used to select an element by its ID?",

        options: [
            "getElementById()",
            "getElement()",
            "queryElement()",
            "selectById()"
        ],

        answer: "getElementById()"
    },

    {
        question: "Which method removes the last element from an array?",

        options: [
            "push()",
            "pop()",
            "remove()",
            "delete()"
        ],

        answer: "pop()"
    },

    {
        question: "Which keyword is used to create a function in JavaScript?",

        options: [
            "function",
            "func",
            "define",
            "method"
        ],

        answer: "function"
    }
];


let currentQuestion = 0;

let score = 0;

let selectedAnswer = false;


const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const questionNumberElement =
    document.getElementById("questionNumber");

const scoreElement =
    document.getElementById("score");

const progressBar =
    document.getElementById("progressBar");

const feedbackElement =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("nextBtn");

const quizContainer =
    document.querySelector(".quiz-container");

const resultContainer =
    document.getElementById("resultContainer");

const finalScoreElement =
    document.getElementById("finalScore");

const resultMessage =
    document.getElementById("resultMessage");

const restartButton =
    document.getElementById("restartBtn");




function loadQuestion() {

    selectedAnswer = false;

    feedbackElement.textContent = "";

    nextButton.style.display = "none";

    const current = questions[currentQuestion];


    questionElement.textContent =
        current.question;



    questionNumberElement.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;



    scoreElement.textContent =
        `Score: ${score}`;


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width =
        `${progress}%`;



    optionsElement.innerHTML = "";



    current.options.forEach(function (option) {

        const button =
            document.createElement("button");

        button.classList.add("option");

        button.textContent = option;

        button.addEventListener(
            "click",
            function () {
                checkAnswer(button, option);
            }
        );

        optionsElement.appendChild(button);

    });
}



function checkAnswer(button, selectedOption) {

    if (selectedAnswer) {
        return;
    }

    selectedAnswer = true;

    const correctAnswer =
        questions[currentQuestion].answer;


    const allOptions =
        document.querySelectorAll(".option");



    allOptions.forEach(function (option) {

        option.classList.add("disabled");

    });



    if (selectedOption === correctAnswer) {

        button.classList.add("correct");

        feedbackElement.textContent =
            "✅ Correct!";

        feedbackElement.style.color =
            "green";

        score++;

        scoreElement.textContent =
            `Score: ${score}`;

    } else {

        button.classList.add("wrong");

        feedbackElement.textContent =
            "❌ Wrong!";

        feedbackElement.style.color =
            "red";



        allOptions.forEach(function (option) {

            if (option.textContent === correctAnswer) {

                option.classList.add("correct");

            }

        });

    }



    nextButton.style.display = "block";
}



nextButton.addEventListener(
    "click",
    function () {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            showResult();

        }

    }
);



function showResult() {

    quizContainer.style.display = "none";

    resultContainer.style.display = "block";


    finalScoreElement.textContent =
        `${score} / ${questions.length}`;


    const percentage =
        (score / questions.length) * 100;


    if (percentage === 100) {

        resultMessage.textContent =
            "🏆 Perfect score! Excellent work!";

    } else if (percentage >= 70) {

        resultMessage.textContent =
            "🔥 Great job! Keep it up!";

    } else if (percentage >= 50) {

        resultMessage.textContent =
            "👍 Good effort! Keep practicing.";

    } else {

        resultMessage.textContent =
            "📚 Keep learning and try again!";

    }
}



restartButton.addEventListener(
    "click",
    function () {

        currentQuestion = 0;

        score = 0;

        quizContainer.style.display = "block";

        resultContainer.style.display = "none";

        loadQuestion();

    }
);


loadQuestion();