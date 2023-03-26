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

// UI integration

let choiceContainers = document.querySelectorAll(".valid");
let confirmButton = document.querySelector("#confirm-button");
let restartButton = document.querySelector("#restart-button");

let playerChoiceDisplay = document.querySelector("#player");
let computerChoiceDisplay = document.querySelector("#compute");

let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");

let mainText = document.querySelector("#main-text");

choiceContainers.forEach(choice => {

    let choiceSelected = 0;

    choice.addEventListener("mouseover", () => {

        choice.querySelector(".choice-img").style.width = "225px";

    })

    choice.addEventListener("mouseout", () => {

        if (!(choice.style.border == "2px solid orange")) {

        choice.querySelector(".choice-img").style.width = "200px";

        }

    })

    choice.addEventListener("click", () => {

        confirmButton.classList.remove("hide");

        for (let i = 0; i < 3; i++) {

            if (choiceContainers[i].style.border == "2px solid orange") {

                choiceContainers[i].style.border = "1px solid black";
                choiceContainers[i].querySelector(".choice-img").style.width = "200px";

            }
            
        }

        choice.style.border = "2px solid orange";
        choice.querySelector(".choice-img").style.width = "225px";


    })

});

confirmButton.addEventListener("click", () => {

    let selection = "";

    for (let i = 0; i < 3; i++) {

        if (choiceContainers[i].style.border == "2px solid orange") {

            selection = choiceContainers[i].id;
            choiceContainers[i].style.border = "1px solid black";
            choiceContainers[i].querySelector(".choice-img").style.width = "200px";

        }
        
    }

    switch (selection) {
        case "rock":
            playerChoiceDisplay.querySelector(".choice-img").src = "Assets/rock.png";
            playerChoiceDisplay.querySelector(".choice-title").innerText = "ROCK";
            break;
        case "paper":
            playerChoiceDisplay.querySelector(".choice-img").src = "Assets/paper.png";
            playerChoiceDisplay.querySelector(".choice-title").innerText = "PAPER";
            break;
        case "scissors":
            playerChoiceDisplay.querySelector(".choice-img").src = "Assets/scissors.png";
            playerChoiceDisplay.querySelector(".choice-title").innerText = "SCISSORS";
            break;
    }

    let computerSelection = getComputerChoice().toLowerCase();

    switch (computerSelection) {

        case "rock":
            computerChoiceDisplay.querySelector(".choice-img").src = "Assets/rock.png";
            computerChoiceDisplay.querySelector(".choice-title").innerText = "ROCK";
            break;
        case "paper":
            computerChoiceDisplay.querySelector(".choice-img").src = "Assets/paper.png";
            computerChoiceDisplay.querySelector(".choice-title").innerText = "PAPER";
            break;
        case "scissors":
            computerChoiceDisplay.querySelector(".choice-img").src = "Assets/scissors.png";
            computerChoiceDisplay.querySelector(".choice-title").innerText = "SCISSORS";
            break;
    
        }

        confirmButton.classList.add("hide");

        playGame(selection, computerSelection); 
        
        playerScore.innerText = winCount;
        computerScore.innerText = loseCount;

        if (winCount == 5) {

            mainText.innerText = "You win!";

        } 

        if (loseCount == 5) {

            mainText.innerText = "You lose!";

        }

        if (winCount == 5 || loseCount == 5) {

            choiceContainers.forEach(choice => {
                
                choice.classList.add("unavailable");

            });

            restartButton.classList.remove("hide");

        }

        restartButton.addEventListener("click", () => {

            location.reload();

        })

})