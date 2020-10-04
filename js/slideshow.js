var placeValue = 1;
var screen1 = document.getElementById("screen1");
var screen2 = document.getElementById("screen2");
var screen3 = document.getElementById("screen3");
function leftSlide() {
  if (placeValue == 1) {
    screen1.style.display = "none";
    screen3.style.display = "flex";
    screen3.style.flexDirection = "row";
    placeValue = 3;
  }
  else if (placeValue == 3) {
    screen3.style.display = "none";
    screen2.style.display = "flex";
    screen2.style.flexDirection = "row";
    placeValue = 2;
  }
  else {
    screen2.style.display = "none";
    screen1.style.display = "flex";
    screen1.style.flexDirection = "row";
    placeValue = 1;

  }
}
function rightSlide() {
  if (placeValue == 1) {
    screen1.style.display = "none";
    screen2.style.display = "flex";
    screen2.style.flexDirection = "row";
    placeValue = 2;
  }
  else if (placeValue == 2) {
    screen2.style.display = "none";
    screen3.style.display = "flex";
    screen3.style.flexDirection = "row";
    placeValue = 3;
  }
  else {
    screen3.style.display = "none";
    screen1.style.display = "flex";
    screen1.style.flexDirection = "row";
    placeValue = 1;
  }
}