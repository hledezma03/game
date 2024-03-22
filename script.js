function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3) + 1;
    if (computerChoice === 1) {
        computerChoice = 'rock';
    } else if (computerChoice === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors'
    }
    return computerChoice;
};

function playRound(playerChoice,computerChoice) {
    if (playerChoice == computerChoice) {
        return 'tie';
    } else if (
        (playerChoice == 'rock' && computerChoice == 'paper') || 
        (playerChoice == 'paper' && computerChoice == 'scissors') || 
        (playerChoice == 'scissors' && computerChoice == 'rock')
        ){
            return 'computer';
    }else {
        return 'player';
    }
};

function playGame() {
    let computerChoice = getComputerChoice();
    let playerPoints = 0;
    let computerPoints = 0;
    for (let rounds = 1; rounds <= 5; rounds++) {
        let playerChoice = prompt('Choose between: rock, paper or scissors').toLowerCase();   
        let result = playRound(playerChoice,computerChoice);
        console.log(`Round: ${rounds}`);
        if (result === 'player') {
            playerPoints++;
            console.log(`You win! ${playerChoice} beats ${computerChoice}`)
            console.log(`Player: ${playerPoints}`)
            console.log(`Computer: ${computerPoints}`)
        } else if (result === 'computer') {
            computerPoints++;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
            console.log(`Player: ${playerPoints}`)
            console.log(`Computer: ${computerPoints}`)
        } else {
            console.log('it is a tie!')
            console.log(`Player: ${playerPoints}`)
            console.log(`Computer: ${computerPoints}`)
        }
        console.log('');
    }

    if (playerPoints > computerPoints) {
        console.log(`Congratulations! You won the game!`);
    } else {
        console.log('Sorry, you lose the game. Try again!!');
    }


};
