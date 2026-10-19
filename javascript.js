raNum = Math.random()

let getComputerChoice = function (number) {
    if (raNum < 0.4) {
        return "Rock";
    } else if (raNum < 0.7) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(raNum);
// console.log(getComputerChoice());