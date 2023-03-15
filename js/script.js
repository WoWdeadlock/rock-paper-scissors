function getComputerChoice() {

    const computerGuess = Math.floor(Math.random() * 3); 

    switch (computerGuess) {
        case 0:
            return "Rock";
    
        case 1:
            return "Scissor";

        case 2:
            return "Paper";
    }

}

for (let i = 0; i < 10; i++) {
    console.log(getComputerChoice());
}
