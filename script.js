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
    let result;
    if (playerChoice === "rock" && computerChoice === "rock" || playerChoice === "paper" && computerChoice === "paper" || playerChoice === "scissors" && computerChoice === "scissors")
    {
        console.log("Tie!");
        result = "tie";
    }
    else if (playerChoice === "rock" && computerChoice === "paper")
    {
        console.log("Player loses. Paper beats rock.")
        result = "lose";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors")
    {
        console.log("Player wins. Rock beats scissors.")
        result = "win";
    }
    else if (playerChoice === "paper" && computerChoice === "rock")
    {
        console.log("Player wins. Paper beats rock.")
        result = "win";
    }
    else if (playerChoice === "paper" && computerChoice === "scissors")
    {
        console.log("Player loses. Scissors beats paper.")
        result = "lose";
    }
    else if (playerChoice === "scissors" && computerChoice === "rock")
    {
        console.log("Player loses. Rock beats scissors.")
        result = "lose";
    }
    else if (playerChoice === "scissors" && computerChoice === "paper")
    {
        console.log("Player wins. Scissors beats paper.")
        result = "win";
    }
    return result;
}

// function game() {
//     let playerScore = 0, computerScore = 0, roundsPlayed = 0;

//     for (roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++)
//     {
//         const playerChoice = getPlayerChoice();
//         const computerChoice = getComputerChoice();

//         let result = playRound(playerChoice, computerChoice);

//         if (result === "win")
//         {
//             playerScore++;
//             // roundsPlayed++
//         }
//         else if (result === "lose")
//         {
//             computerScore++;
//             // roundsPlayed++
//         }
//         console.log("Current score is:", playerScore, "-", computerScore);
//     }

//     finalScore = console.log("Result is:", playerScore, "-", computerScore);
//     if (playerScore > computerScore)
//     {
//         console.log("Player won!")
//     }
//     else if (playerScore < computerScore)
//     {
//         console.log("Player lost!")
//     }
//     else
//     {
//         console.log("It's a tie!")
//     }
// }


// playRound(playerChoice, computerChoice);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => console.log(button.id));
});

// game();