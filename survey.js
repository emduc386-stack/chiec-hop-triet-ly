/*
=====================================
Chiếc Hộp Triết Lý
Version 0.3
Build 004

survey.js
=====================================
*/

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const stepElement = document.getElementById("currentStep");
const progressBar = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");

let selectedAnswer = null;
const userAnswers = [];

function loadQuestion(){

    const q = questions[currentQuestion];

    stepElement.textContent = currentQuestion + 1;

    progressBar.style.width =
        ((currentQuestion + 1) / questions.length) * 100 + "%";

    questionElement.textContent = q.question;

    answersElement.innerHTML = "";

    selectedAnswer = null;

    if(q.input){

        const input = document.createElement("input");

        input.type = "text";

        input.placeholder = q.placeholder;

        input.className = "textAnswer";

        input.oninput = () => {

            selectedAnswer = input.value;

        };

        answersElement.appendChild(input);

    }else{

        q.options.forEach(option=>{

            const button = document.createElement("button");

            button.className = "answerBtn";

            button.textContent = option;

            button.onclick = ()=>{

                selectedAnswer = option;

                document
                .querySelectorAll(".answerBtn")
                .forEach(btn=>btn.classList.remove("selected"));

                button.classList.add("selected");

            };

            answersElement.appendChild(button);

        });

    }

}

loadQuestion();
