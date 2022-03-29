const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

function rollDice(die1, die2) {
  return {
    image1: image1.setAttribute("src", `images/dice${die1}.png`),
    image2: image2.setAttribute("src", `images/dice${die2}.png`),
  };
}

rollDice(randomNumber1, randomNumber2);

if (randomNumber1 > randomNumber2) h1.textContent = "Player 1 Wins! 🚩";
else if (randomNumber1 < randomNumber2) h1.textContent = "Player 2 Wins! 🚩";
else h1.textContent = "Draw!";
