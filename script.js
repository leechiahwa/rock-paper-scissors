function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0)
    {
        console.log("Computer chooses Rock");
        return "rock";
    }
    else if (number === 1)
    {
        console.log("Computer chooses Paper");
        return "paper";
    }
    else if (number === 2)
    {
        console.log("Computer chooses Scissors");
        return "scissors";
    }
    return number;
}

function getPlayerChoice() {
    let playerChoice = prompt("What is your choice?");

    if (playerChoice === "Rock" || playerChoice === "rock")
    {
        console.log("Player chooses Rock");
        return "rock";
    }
    else if (playerChoice === "Paper" || playerChoice === "paper")
    {
        console.log("Player chooses Paper");
        return "paper";
    }
    else if (playerChoice === "Scissors" || playerChoice === "scissors")
    {
        console.log("Player chooses Scissors");
        return "scissors";
    }
    else
    {
        console.log("Misinput. Please try again.")
        return getPlayerChoice();
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "rock" || playerChoice === "paper" && computerChoice === "paper" || playerChoice === "scissors" && computerChoice === "scissors")
    {
        console.log("Tie!");
    }
    else if (playerChoice === "rock" && computerChoice === "paper")
    {
        console.log("Player loses. Paper beats rock.")
    }
    else if (playerChoice === "rock" && computerChoice === "scissors")
    {
        console.log("Player wins. Rock beats scissors.")
    }
    else if (playerChoice === "paper" && computerChoice === "rock")
    {
        console.log("Player wins. Paper beats rock.")
    }
    else if (playerChoice === "paper" && computerChoice === "scissors")
    {
        console.log("Player loses. Scissors beats paper.")
    }
    else if (playerChoice === "scissors" && computerChoice === "rock")
    {
        console.log("Player loses. Rock beats scissors.")
    }
    else if (playerChoice === "scissors" && computerChoice === "paper")
    {
        console.log("Player wins. Scissors beats paper.")
    }
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

playRound(playerChoice, computerChoice);
