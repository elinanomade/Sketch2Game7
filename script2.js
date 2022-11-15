'use script';

/* const circle = document.getElementById("circle");
circle.addEventListener("click", changeColor);
function changeColor() {
    circle.classList.toggle("circleRed");
}*/


/*
const funkyButton = document.getElementById("BTN");
funkyButton.addEventListener("click", rotateCircle)
function rotateCircle() {
    circle.classList.toggle("rotateCircle");
} */

const circles = document.querySelectorAll(".circle");


 for (let i = 0; i <12; i++) {
    circles[i].addEventListener("click", rotateCircle);
    function rotateCircle() {
    circles[i].classList.toggle("rotateCircle");
    
 }
}
