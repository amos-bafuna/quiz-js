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
},{
  numb: 7,
  question: "A quoi sert le CSS ?",
  answer: "A créer du style",
  options: [
    "A créer des système",
    "A créer des images",
    "A naviguer",
    "A créer du style"
  ]
},{
  numb: 8,
  question: "Que signifie int en Javascript ?",
  answer: "Integer",
  options: [
    "Int",
    "String",
    "Float",
    "Intire"
  ]
},{
  numb: 9,
  question: "Lequel de ces événement est faux ?",
  answer: "non()",
  options: [
    "click()",
    "move()",
    "submit()",
    "non()"
  ]
},{
  numb: 10,
  question: "Que signifie str ?",
  answer: "string",
  options: [
    "string",
    "strong",
    "strim",
    "solid string"
  ]
}]

let homePage = document.querySelector('#page1');
let questionPage = document.querySelector('#page2');
let resultPage = document.querySelector('#page3');

let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
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
let allRadio = document.querySelectorAll("#radio");
let radio = document.querySelector("#rad");
let finalScore = document.querySelector(".final-score");
let count = 0;
let scoreFinal = 0;



// Timer management */
let i = 0;
let time = 60;
timeLeftOut = false;
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
      width = 100;
      timeOut();
    } else {
      width -= 1.6666;
      time--;
      elem.style.width = width + "%";
      timeLeft.innerHTML = time;
    }
  }
}
}


function validateName(name){
  let nameRegex = new RegExp(/^[a-zA-Z]+/i);
  let validName = nameRegex.test(name);

  if(validName){
    return true;
  }
  else{
    return false;
  }
}

function validateEmail(email){
  let emailReg = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/i);
  let validEmail = emailReg.test(email);

  if(validEmail){
    return true
  }
  else {
      return false;
  }
}


let form = document.querySelector("form");
form.addEventListener("submit", function(e){
  e.preventDefault();

  if((userName.value == '' && userEmail.value == '')){
    errorName.innerHTML = 'N’oubliez pas de renseigner votre nom avant de commencer le Quiz.';
    errorEmail.innerHTML = 'N’oubliez pas de renseigner votre email avant de commencer le Quiz.';
  }
  else{
    if(!validateName(userName.value)){
      errorName.innerHTML = 'Veillez saissir un nom valide!';
    }
    else if(!validateEmail(userEmail.value)){
      errorEmail.innerHTML = 'veillez saisir un email valide!';
    }
    else{
      homePage.style.display = 'none';
      questionPage.style.display = 'block';
      setTimer();
    }
  }
})

function showResult(){
  let titleResult = document.querySelector('.title-result');
  let emailResult = document.querySelector('.email-result');

  questionPage.style.display = 'none';
  resultPage.style.display = 'block';

  titleResult.innerHTML = userName.value;
  emailResult.innerHTML = userEmail.value;
  finalScore.innerHTML = scoreFinal + "/" + questions.length;
  console.log(scoreFinal);
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
    scoreFinal++;
  }
  count++;
}
else{
  showResult();
}
currentQuestion.innerHTML = "Question " + questions[count].numb + "/" + questions.length;
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
