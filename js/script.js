let winCount = 0;
let loseCount = 0;

function getComputerChoice() {

    const computerGuess = Math.floor(Math.random() * 3); 
    switch (computerGuess) {
        case 0:
            return "Rock";
    
        case 1:
            return "Scissors";

        case 2:
            return "Paper";
    }

}

function playGame(playerSelection, computerSelection) {

    let playerSelect = playerSelection.toLowerCase();
    let computerSelect = computerSelection.toLowerCase();

    if (playerSelect === computerSelect) {
        return "It is a tie!"
    } else if (
        (playerSelect === "rock" && computerSelect === "paper") || 
        (playerSelect === "paper" && computerSelect === "scissors") ||  
        (playerSelect === "scissors" && computerSelect === "rock"))  
        {
        loseCount++;
        return "You lose! " + computerSelect.charAt(0).toUpperCase() + computerSelect.slice(1) + " Beats " + playerSelect.charAt(0).toUpperCase() + playerSelect.slice(1) + "!";
    } else if (
        (computerSelect === "rock" && playerSelect === "paper") || 
        (computerSelect === "paper" && playerSelect === "scissors") ||  
        (computerSelect === "scissors" && playerSelect === "rock"))  
        {
        winCount++;
        return "You win! " + playerSelect.charAt(0).toUpperCase() + playerSelect.slice(1) + " Beats " + computerSelect.charAt(0).toUpperCase() + computerSelect.slice(1) + "!";
 }
}

function game() {
    for (let i = 0; i < 5; i++) {

        let playerChoice = prompt("Enter Rock, Paper or Scissors");

        console.log(playGame(playerChoice, getComputerChoice()));
        console.log(winCount);
        console.log(loseCount);
    }

    if (winCount > loseCount) {
        console.log("You won!");
    } else if (loseCount > winCount) {
        console.log("You lose!")
    } else {
        console.log("It was a tie!");
    }
}

game();
