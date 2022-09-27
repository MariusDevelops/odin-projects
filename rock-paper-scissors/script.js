const buttons = document.querySelectorAll("button");

// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function
// with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerSelection = e.target.innerText;
    let computerSelection = getComputerChoice();
    console.log("player: " + playerSelection);
    console.log("computer: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  });
});

// 1. Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  const words = ["rock", "paper", "scissors"];
  let word = words[Math.floor(Math.random() * words.length)];
  return word;
}

// 2. Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection and
// computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "winner: player wins!";
  } else if (
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    return "winner: computer wins!";
  } else {
    return "winner: tie! nobody wins!";
  }
}

// 3. Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
// let guess = "ROCK";
// const playerSelection = guess.toLowerCase();
// const computerSelection = getComputerChoice();

// console.log("player: " + playerSelection);
// console.log("computer: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));

// 4. Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game
// that keeps score and reports a winner or loser at the end.
// function game() {
//   // 5. Final score counter.
//   let score = 0;

//   for (let i = 0; i < 5; i++) {
//     // 3. Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
//     // 4.1 Use prompt() to get input from the user.
//     let guess = prompt("rock, paper or scissors?");
//     const playerSelection = guess.toLowerCase();
//     const computerSelection = getComputerChoice();

//     // 5. Final score counter.
//     if (
//       playRound(playerSelection, computerSelection) === "winner: player wins!"
//     ) {
//       score = score + 1;
//     } else if (
//       playRound(playerSelection, computerSelection) === "winner: computer wins!"
//     ) {
//       score = score - 1;
//     } else {
//       score = score;
//     }

//     console.log("player: " + playerSelection);
//     console.log("computer: " + computerSelection);
//     console.log(playRound(playerSelection, computerSelection));
//     // console.log(score);
//     console.log("//////////////////");
//   }

//   // 5. Final score counter.
//   if (score > 0) {
//     return console.log("Congrats! Player won more games then computer!");
//   } else if (score < 0) {
//     return console.log("Sad! Computer won more games then player!");
//   } else {
//     return "Tie! Play one more time and find out who wins!";
//   }
// }

// game();
