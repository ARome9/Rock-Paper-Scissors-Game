// Variable Declarations
let playerSelection;
let computerSelection;
let computerScore;
let playerScore; 
let i; 

//Selection Array for game
const selectionArr = ["Rock", "Paper", "Scissors"]; 

//Function for computer's option
function computerPlay () {
    return selectionArr[Math.floor(Math.random() * selectionArr.length)].toLowerCase();
}

//Prompt for player selection
playerSelection = prompt("Please choose Rock, Paper, or Scissors:").toLowerCase();

//Function that executes one round of the game
function playRound (playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "It's a tie!";
    } else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection ==="scissors" && computerSelection === "paper")) {
            return "You win!";
        } else if(
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")) {
                return "You lose!";
            }
}
//Sets computer selection to the computer selection function
computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
console.log("You chose: " + playerSelection);
console.log("The computer chose: " + computerSelection); 

//Function that lets user play a full game (5 rounds)
function game() {
    for (let i = 0; i <= 5; i++) playRound(i); {
        if(playerScore === 5)
        return playRound(playerSelection, computerSelection);
    }
}  

console.log(game());