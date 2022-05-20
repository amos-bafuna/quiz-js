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