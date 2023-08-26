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
 
function playRound(button) {
    let playerChoice = button.target.id;
    console.log("Player chooses " + button.target.id);
    let computerChoice = getComputerChoice();
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

function game() {
    let playerScore = 0, computerScore = 0, roundsPlayed = 0;

    // for (roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++)
    // {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();

        let result = playRound(playerChoice, computerChoice);

        if (result === "win")
        {
            playerScore++;
            // roundsPlayed++
        }
        else if (result === "lose")
        {
            computerScore++;
            // roundsPlayed++
        }
        // console.log("Current score is:", playerScore, "-", computerScore);
    // }

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
}


// playRound(playerChoice, computerChoice);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

// game();