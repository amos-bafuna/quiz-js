let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let elem = document.querySelector(".Loading");
    let width = 100;
    let id = setInterval(frame, 1000);
    function frame() {
      if (width <= 1) {
        clearInterval(id);
        i = 0;
      } else {
        width--;
        elem.style.width = width + "%";
      }
    }
  }
}