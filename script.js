// * Every time you click one, it turns green

const green_square1 = document.getElementById("green_square1");

// const green_square1 = document.getElementById("green_square1");
// green_square1.onclick = function () {
//   square.className = "green";
// };

green_square1.addEventListener("click", function onClick(event) {
  event.target.style.backgroundColor = "green";
});

const green_square2 = document.getElementById("green_square2");

green_square2.addEventListener("click", function onClick(event) {
  event.target.style.backgroundColor = "green";
});

const green_square3 = document.getElementById("green_square3");

green_square3.addEventListener("click", function onClick(event) {
  event.target.style.backgroundColor = "green";
});

const green_square4 = document.getElementById("green_square4");

green_square4.addEventListener("click", function onClick(event) {
  event.target.style.backgroundColor = "green";
});

const green_square5 = document.getElementById("green_square5");

green_square5.addEventListener("click", function onClick(event) {
  event.target.style.backgroundColor = "green";
});

const green_square6 = document.getElementById("green_square6");

green_square6.addEventListener("click", function onClick(event) {
  event.target.style.backgroundColor = "green";
});

// * When the last square turns green, they all go back to no color in backwards sequence to which it was clicked (not all at once)
// Can I do this with animation or transforms??
// https://javascript.info/js-animation
// https://www.the-art-of-web.com/css/css-animation/



