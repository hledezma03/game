const btn = document.querySelectorAll("button");
const player = document.querySelector(".playerPoints");
const computer = document.querySelector(".computerPoints");
const round =document.querySelector(".round");
const winner = document.querySelector(".win");


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
let playerPoints = 0;
let computerPoints = 0;
let rounds = 0;


    btn.forEach(button => {
        button.addEventListener("click", () => {
            let computerChoice = getComputerChoice();  
            let playerChoice = button.textContent.toLowerCase();
            let result = playRound(playerChoice,computerChoice);
            if (result == 'player') {
                playerPoints++;
                winner.textContent = `You win this round! ${playerChoice} beats ${computerChoice}`
            } else if (result == 'computer') {
                computerPoints++;
                winner.textContent = `You lose this round! ${computerChoice} beats ${playerChoice}`;
            } else {
                winner.textContent = "It's a tie! Both players choose the same"
            }
            rounds++
            player.textContent = `Player: ${playerPoints}`;
            computer.textContent = `Computer: ${computerPoints}`;
            round.textContent = `Round: ${rounds}`
        });
    });

if (playerPoints > computerPoints) {
    winner.textContent = 'You win this game! Can you win again?'
} else if (playerPoints < computerPoints){
    winner.textContent = 'You lose this game! Try again'
}


