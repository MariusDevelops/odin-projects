// 1. Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  const words = ["rock", "paper", "scissors"];
  let word = words[Math.floor(Math.random() * words.length)];
  return word;
}

getComputerChoice();

// 2. Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection and
// computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return console.log("you won");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return console.log("you lost");
  } else {
    return console.log("draw");
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log("player: " + playerSelection);
console.log("computer: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));

// 3. Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
