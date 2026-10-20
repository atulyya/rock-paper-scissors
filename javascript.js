let raNum = function () {
    return Math.random();
}

let getComputerChoice = function (number) {
    if (number < 0.4) {
        return "rock";
    } else if (number < 0.7) {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log(raNum);
// console.log(getComputerChoice());

let getHumanChoice = function() {
    return prompt("So, what's it gonna be?").toLowerCase();
}   


// playRound(getHumanChoice(), getComputerChoice());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log(`You both chose ${humanChoice}! It's a draw.`)
        } else if (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper") {
            console.log(`Computer chose ${computerChoice}. You Win!`);
            humanScore += 1;
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
        } else if (humanChoice == "scissors" && computerChoice == "rock" ||
            humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "scissor") {
            console.log(`Computer chose ${computerChoice}. You Lose!`);
            computerScore += 1;
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
        } else {
            console.log("Some mysterious error!")
        }
        // getComputerChoice();

    }
    playRound(getHumanChoice(), getComputerChoice(raNum()));
    playRound(getHumanChoice(), getComputerChoice(raNum()));
    playRound(getHumanChoice(), getComputerChoice(raNum()));
    playRound(getHumanChoice(), getComputerChoice(raNum()));
    playRound(getHumanChoice(), getComputerChoice(raNum()));    

    if (humanScore > computerScore) {
        console.log(`The Score is: ${humanScore}:${computerScore} in your favour. You win the game!`)
    } else if (humanScore < computerScore) {
        console.log(`The Score is: ${humanScore}:${computerScore} in computer's favour. You lose :(`)
    } else {
        console.log(`The Score is: ${humanScore}:${computerScore}. It's a draw!`)
    }
}

playGame();
