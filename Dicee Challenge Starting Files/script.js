var num1, num2;
num1 = Math.floor(Math.random() * 6 + 1);
num2 = Math.floor(Math.random() * 6 + 1);

var pic1 = "./images/dice" + num1 + ".png";
var pic2 = "./images/dice" + num2 + ".png";

document.querySelector(".img1").setAttribute("src", pic1);
document.querySelector(".img2").setAttribute("src", pic2);

var message = document.querySelector("h1");

if (num1 > num2) message.innerHTML = "🚩 Player 1 Wins";
else if (num1 < num2) message.innerHTML = "Player 2 Wins 🚩";
else message.innerHTML = "Draw";
