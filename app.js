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
  }
})

// Timer management */
let i = 0;
let time = 60;
function move() {
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
        width -= 1.66;
        time--;
        elem.style.width = width + "%";
        timeLeft.innerHTML = time;
      }
    }
  }
}