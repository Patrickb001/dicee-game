# Dicee Game

## Overview
- Dice roll game
- Refresh page to roll a pair of dice
- After intial refresh the game starts!
- Player that rolls higher number wins!

## My process

### Built with

- HTML5 markup
- CSS 
- JavaScript 

### What I learned

- How to set the page an initial state during the first visit

const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];
const h1 = document.querySelector("h1");

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (performance.getEntriesByType("navigation")[0].type === "reload") {
  rollDice(randomNumber1, randomNumber2);
}

function rollDice(die1, die2) {
  if (randomNumber1 > randomNumber2) h1.innerHTML = "Player 1 Wins! 🚩";
  else if (randomNumber1 < randomNumber2) h1.innerHTML = "Player 2 Wins! 🚩";
  else h1.textContent = "Draw!";
  return {
    image1: image1.setAttribute("src", `images/dice${die1}.png`),
    image2: image2.setAttribute("src", `images/dice${die2}.png`),
  };
}

### Useful resources

- (https://www.udemy.com/course/the-complete-web-development-bootcamp/) -  I am currently learning MERN stack and using her course to build projects utilizing the front and backend. 

## Author

- Portfolio Page (https://pprograms.netlify.app/)

## Acknowledgments

A big thank you to Dr. Angela Yu and her Web Develoment Bootcamp Course. Her story about her career transition from doctor to software engineer is inspiring. She sprinkles that wisdom in her videos from how to think logically and use momentum to study to creating project ideas for her student to develop their coding skills. 
