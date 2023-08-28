let playerScore = 0, computerScore = 0, roundsPlayed = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0)
    {
        computerOutput.textContent = "Computer chooses rock";
        return "rock";
    }
    else if (number === 1)
    {
        computerOutput.textContent = "Computer chooses paper";
        return "paper";
    }
    else if (number === 2)
    {
        computerOutput.textContent = "Computer chooses scissors";
        return "scissors";
    }
    return number;
}

function playRound(button) {
    let playerChoice = button.target.id;
    playerOutput.textContent = "Player chooses " + button.target.id;
    let computerChoice = getComputerChoice();
    let result;
    if (playerChoice === "rock" && computerChoice === "rock" || playerChoice === "paper" && computerChoice === "paper" || playerChoice === "scissors" && computerChoice === "scissors")
    {
        roundResult.textContent = "Tie!";
        result = "tie";
    }
    else if (playerChoice === "rock" && computerChoice === "paper")
    {
        roundResult.textContent = "Player loses. Paper beats rock.";
        result = "lose";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors")
    {
        roundResult.textContent = "Player wins. Rock beats scissors.";
        result = "win";
    }
    else if (playerChoice === "paper" && computerChoice === "rock")
    {
        roundResult.textContent = "Player wins. Paper beats rock.";
        result = "win";
    }
    else if (playerChoice === "paper" && computerChoice === "scissors")
    {
        roundResult.textContent = "Player loses. Scissors beats paper.";
        result = "lose";
    }
    else if (playerChoice === "scissors" && computerChoice === "rock")
    {
        roundResult.textContent = "Player loses. Rock beats scissors.";
        result = "lose";
    }
    else if (playerChoice === "scissors" && computerChoice === "paper")
    {
        roundResult.textContent = "Player wins. Scissors beats paper.";
        result = "win";
    }
    game(result);
}

function game(result) {
    if (result === "win")
    {
        playerScore++;
        roundsPlayed++
    }
    else if (result === "lose")
    {
        computerScore++;
        roundsPlayed++
    }
    score.textContent = "Current score is: " + playerScore + "-" + computerScore;

    if (roundsPlayed === 5){
        finalScore = console.log("Result is:", playerScore, "-", computerScore);
        if (playerScore > computerScore)
        {
            finalResult.textContent = "Player won!";
        }
        else if (playerScore < computerScore)
        {
            finalResult.textContent = "Player lost!";
        }
        else
        {
            finalResult.textContent = "It's a tie!";
        }
        roundsPlayed = 0, playerScore = 0, computerScore = 0;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

const container = document.querySelector('#result-container');
const roundResult = document.createElement('div');
const playerOutput = document.createElement('div');
const computerOutput = document.createElement('div');
const score = document.createElement('div');
const finalResult = document.createElement('div');

playerOutput.classList.add('playerOutput');
computerOutput.classList.add('computerOutput');
roundResult.classList.add('result');
score.classList.add('score');
finalResult.classList.add('finalResult');

container.appendChild(playerOutput);
container.appendChild(computerOutput);
container.appendChild(roundResult);
container.appendChild(score);
container.appendChild(finalResult);
