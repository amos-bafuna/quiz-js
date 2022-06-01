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

let homePage = document.querySelector('#page1');
let questionPage = document.querySelector('#page2');
let resultPage = document.querySelector('#page3');

let userName = document.querySelector(".input1").value;
let userEmail = document.querySelector(".input2").value;
let errorName = document.querySelector(".errorName");
let errorEmail = document.querySelector(".errorEmail");

let questionFocus = document.querySelector(".questionFocus");
let currentQuestion = document.querySelector(".question-number");
let check1 = document.querySelector(".check1");
let check2 = document.querySelector(".check2");
let check3 = document.querySelector(".check3");
let check4 = document.querySelector(".check4");
let btnNext = document.querySelector(".btn-next");
let btnQuit = document.querySelector(".btn-quit");
let allRadio = document.querySelectorAll("#rad");
let radio = document.querySelector("#rad");
let count = 0;
let score = 0;





// Timer management */
let i = 0;
let time = 60;
function setTimer() {
if (i == 0) {
  i = 1;
  let elem = document.querySelector(".Loading");
  let timeLeft = document.querySelector(".time")
  let width = 100;
  let id = setInterval(frame, 500);
  function frame() {
    if (width < 1) {
      clearInterval(id);
      i = 0;
      time = 60;
      //timeOut();
      btnNext.click();
    } else {
      width -= 1.6666;
      time--;
      elem.style.width = width + "%";
      timeLeft.innerHTML = time;
    }
  }
}
}

function validateEmail(email){
let emailReg = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/i);
let valid = emailReg.test(email);

if(!valid) {
    return false;
} else {
    return true;
}
}


let form = document.querySelector("form");
form.addEventListener("submit", function(e){
e.preventDefault();

if((userName !== '' && userEmail !== '')){
  errorName.innerHTML = 'N’oubliez pas de renseigner votre nom avant de commencer le Quiz.';
  errorEmail.innerHTML = 'N’oubliez pas de renseigner votre email avant de commencer le Quiz.';
}
/*  else if(validateEmail(userEmail)){
  errorEmail.innerHTML = 'Veillez saissir un email valide.';
} */
else{
  homePage.style.display = 'none';
  questionPage.style.display = 'block';
  setTimer();
}
})

function showResult(){
let titleResult = document.querySelector('.title-result');
let emailResult = document.querySelector('.email-result');

questionPage.style.display = 'none';
resultPage.style.display = 'block';

titleResult.innerHTML = userName;
emailResult.innerHTML = userEmail;
console.log(score);
}

allRadio.forEach(elem =>{
elem.addEventListener('click', (e)=>{
  btnNext.removeAttribute('disabled');
})
})

function init(){
btnNext.setAttribute('disabled', 'disabled');
}

function showQuestion(){
selectedAnswer = document.querySelector("input[type='radio']:checked");
//console.log(selectedAnswer.nextElementSibling.textContent);
if(count<questions.length-1){
  if(selectedAnswer.nextElementSibling.textContent == questions[count].answer){
    score++;
  }
  count++;
}
else{
  showResult();
}
questionFocus.textContent = questions[count].question
check1.textContent = questions[count].options[0]
check2.textContent = questions[count].options[1]
check3.textContent = questions[count].options[2]
check4.textContent = questions[count].options[3]


allRadio.forEach(element => {
    element.checked=false;
});
}

function nextQuestion(){
init();
setTimer();
showQuestion();
}

function timeOut (){
nextQuestion();
}



let selectedAnswer = "";

questionFocus.textContent = questions[0].question
check1.textContent = questions[0].options[0]
check2.textContent = questions[0].options[1]
check3.textContent = questions[0].options[2]
check4.textContent = questions[0].options[3]

btnNext.addEventListener("click",(e)=>{
  e.preventDefault()
  nextQuestion();
  
})

btnQuit.addEventListener("click", (e)=>{
e.preventDefault();
showResult();
})
