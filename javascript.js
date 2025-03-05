humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    values = ['ROCK', 'PAPER', 'SCISSORS'];
    x = Math.floor(Math.random() * 3);
    return values[x];
}

function getHumanChoice() {
    humanChoice = prompt("Enter Rock, Paper, or Scissors: ")
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    console.log("Human: " + humanChoice);
    console.log("Computer: " + computerChoice);
    if (humanChoice == computerChoice) {
        console.log("Tie")
    } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        console.log("Computer Wins.")
        computerScore += 1;
    } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        console.log("Computer Wins.")
        computerScore += 1;
    } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        console.log("Computer Wins.")
        computerScore += 1;
    } else {
        console.log("Human wins.")
        humanScore += 1
    }


}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    console.log("Final Score:")
    console.log("-------------------------------------")
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

playGame()