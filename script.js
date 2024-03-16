function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random()*3) + 1;
    if (cpuChoice === 1) {
        cpuChoice = 'Rock';
    } else if (cpuChoice === 2) {
        cpuChoice = 'Paper';
    } else {
        cpuChoice = 'Scissors'
    }
    return cpuChoice
}

console.log(getComputerChoice())