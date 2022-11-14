'use script';

const circle = document.getElementById("circle");
circle.addEventListener("click", changeColor);
function changeColor() {
    circle.classList.toggle("circleRed");
}


/*
const funkyButton = document.getElementById("BTN");
funkyButton.addEventListener("click", rotateCircle)
function rotateCircle() {
    circle.classList.toggle("rotateCircle");
} */

/*
const cbox = document.querySelectorAll(".all");
cbox.addEventListener("click", rotateCircle)
function rotateCircle() {
    circle.classList.toggle("rotateCircle");

 }
 */