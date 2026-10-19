raNum = Math.random()
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = function (number) {
    if (raNum < 0.4) {
        return "rock";
    } else if (raNum < 0.7) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(raNum);
console.log(getComputerChoice());

let getHumanChoice = function() {
    return prompt("So, what's it gonna be?").toLowerCase();
}   

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`You both chose ${humanChoice}! It's a draw.`)
    } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`Computer chose ${computerChoice}. You Win!`);
        console.log(++humanScore);
        console.log(computerScore);
    } else if (humanChoice == "scissors" && computerChoice == "rock" || humanChoice == "rock" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "scissor") {
        console.log(`Computer chose ${computerChoice}. You Lose!`);
        console.log(humanScore);
        console.log(++computerScore);
    } else {
        console.log("Some mysterious error!")
    }
}

playRound(getHumanChoice(), getComputerChoice());