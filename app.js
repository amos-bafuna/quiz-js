
// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Dans quel balise HTML plaçons-nous le code JavaScript?",
  answer: "La balise script",
  options: [
    "La balise js",
    "La balise javascript",
    "La balise script",
    "La balise rel"
  ]
},
  {
  numb: 2,
  question: "Comment faire appelle à une fonction nommée « sum »?",
  answer: "sum()",
  options: [
    "sum()",
    "call function sum()",
    "call sum()",
    "Aucune de ces réponses"
  ]
},
  {
  numb: 3,
  question: " Quel est le bon endroit pour insérer un code JavaScript?",
  answer: "La section body",
  options: [
    "La section head",
    "La section footer",
    "La section body",
    "La section nav"
  ]
},
  {
  numb: 4,
  question: "Comment créer une fonction en JavaScript?",
  answer: "function f()",
  options: [
    "function f()",
    "function = f()",
    "function:f()",
    "fonction()"
  ]
},
  {
  numb: 5,
  question: "Quel est le type d'un fichier javascript ?",
  answer: ".js",
  options: [
    ".txt",
    ".pdf",
    ".html",
    ".js"
  ]
}, {
  numb: 6,
  question: "Que signifie NaN en Javascript ?",
  answer: "Not a Number",
  options: [
    "No and Not",
    "Not a Number",
    "Noun and Number",
    "Nom and Name"
  ]
}]

// Timer management */
let i = 0;
let time = 60;
function setTimer() {
  if (i == 0) {
    i = 1;
    let elem = document.querySelector(".Loading");
    let timeLeft = document.querySelector(".time")
    let width = 100;
    let id = setInterval(frame, 1000);
    function frame() {
      if (width < 1) {
        clearInterval(id);
        i = 0;
        time = 60;
      } else {
        width -= 1.6666;
        time--;
        elem.style.width = width + "%";
        timeLeft.innerHTML = time;
      }
    }
  }
}


let btnNext = document.querySelector(".btn-next");
let selectedAnswer;
let questionResult;
let result = 0;
let currentQuestion = 0;


function showQuestion(questionIndex){

  let questionText = document.querySelector(".questionFocus");
  let questionNumber = document.querySelector(".question-number");
  
  questionText.innerHTML = questions[questionIndex].question;
  questionNumber.innerHTML = questions[questionIndex].numb + "/" + questions.length;

  for(let index = 0; index < questions[questionIndex].options.length; index++){
    let formQuestion = document.querySelector(".form-question");
    let formCheck = document.createElement("div");
    formCheck.classList.add('form-check');

    let inputCheck = document.createElement("input");
    let labelCheck = document.createElement("label");

    inputCheck.setAttribute("type", "radio");
    inputCheck.setAttribute("name", "optionName");
    inputCheck.setAttribute("id", "option"+index);
    inputCheck.setAttribute("value", questions[questionIndex].options[index]);

    labelCheck.classList.add("form-check-label");
    labelCheck.setAttribute("for", "option"+index)
    labelCheck.innerHTML = questions[questionIndex].options[index];

    formCheck.appendChild(inputCheck);
    formCheck.appendChild(labelCheck);
    formQuestion.prepend(formCheck);
  }

  let choosen = document.querySelector(".form-question");
  let radioButtons = document.querySelectorAll('input[name="optionName"]');
  choosen.addEventListener("click", function (){
      for (const radioButton of radioButtons) {
          if(radioButton.checked) {
              selectedAnswer = radioButton.value;
              btnNext.removeAttribute('disabled');
              console.log(selectedAnswer);
              break;
          }
      }
  })
}




let errorName = document.querySelector(".errorName");
let errorEmail = document.querySelector(".errorEmail");

let form = document.querySelector("form");
form.addEventListener("submit", function(e){
  e.preventDefault()

  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");
  let page3 = document.getElementById("page3");

  let userName = document.querySelector(".input1").value;
  let userEmail = document.querySelector(".input2").value;

  if(!(userName !== '' && userEmail !== '')){
    errorName.innerHTML = 'N’oubliez pas de renseigner votre nom avant de commencer le Quiz.';
    errorEmail.innerHTML = 'N’oubliez pas de renseigner votre email avant de commencer le Quiz.';
    
  }
  else{
    page1.style.display = 'none';
    page2.style.display = 'block';

    let main = document.querySelector(".main");
    let container = document.querySelector(".container");

    function init(){
      main.removeChild(container);
      
      let newContainer = document.createElement('div');
      newContainer.classList.add('container');
    
      main.appendChild(newContainer);
    }

    showQuestion(currentQuestion);
    btnNext.addEventListener('click', (e) => {
      e.preventDefault();
      init();
      currentQuestion += 1;
      showQuestion(currentQuestion);
      if(selectedAnswer == questions[questionIndex].answer){
        questionResult++;
      }
    })

    console.log(questionResult)
  }
})

// currentQuestion++;
// showQuestions(currentQuestion);