// begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  const words = ["Rock", "Paper", "Scissors"];
  let word = words[Math.floor(Math.random() * words.length)];
  return console.log(word);
}

getComputerChoice();
