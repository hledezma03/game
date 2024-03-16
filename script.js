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
        console.log('Draw!')
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose! Paper beats Rock')
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! Rock beats Scissors')
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win! Paper beats Rock')
    }else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You lose! Scissors beats Paper')
    }else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You lose! Rock beats Scissors')
    }else {
        console.log('You win! Scissors beats Paper')
    }
};

let playerChoice = 'scissors';
let computerChoice = getComputerChoice();

playRound(playerChoice,computerChoice);