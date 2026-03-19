const rockButton = document.querySelector(".rock-button")
const paperButton = document.querySelector(".paper-button")
const scissorButton = document.querySelector(".scissor-button")
const restartButton = document.querySelector(".restart-button")

const playerScoreBoard = document.querySelector(".player-score")
const computerScoreBoard = document.querySelector(".computer-score")
const messageOutput = document.querySelector(".message-output")

const playerOutput = document.querySelector(".player-output")
const computerOutput = document.querySelector(".computer-output")

let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = ["scissor", "paper", "rock"]

    let rand = Math.floor(Math.random() * 3)

    return choices[rand]
}

function playRound(playerChoice) {
    /* get computer choice (in strings)*/ 
    /* compare with playerchoice*/
    /* update message */
    /* update counter */
    /* return win, lose, draw */

    let computerChoice = getComputerChoice()

    if (computerChoice == "rock") {
        computerOutput.textContent = "✊"
    } else if (computerChoice == "paper") {
        computerOutput.textContent = "🖐️"
    } else if (computerChoice == "scissor") {
        computerOutput.textContent = "✌️"
    }

    if (playerChoice == computerChoice) {
        return "draw"
    } else if (playerChoice == "rock" && computerChoice == "scissor") {
        return "win"
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return "win"
    } else if (playerChoice == "scissor" && computerChoice == "paper") {
        return "win"
    } else {
        return "lose"
    }
}

function playGame(playerChoice) {
    if (playRound(playerChoice) == "win") {
        playerScore += 1
        console.log(playerScore)
        updateScoreBoard()
        messageOutput.textContent = "You won the round !!!"
    } else if (playRound(playerChoice) == "lose") {
        computerScore += 1
        console.log(computerScore)
        updateScoreBoard()
        messageOutput.textContent = "You lose the round !!!"
    } else if (playRound(playerChoice) == "draw") {
        messageOutput.textContent = "You draw !!!"
    }

    if (playerScore == 5) {
        messageOutput.textContent =`Congratulatios you won the game with score ${playerScore}-${computerScore} !!!`
        resetAll()
    } else if (computerScore == 5) {
        messageOutput.textContent =`Sorry you lose, with score ${playerScore}-${computerScore} !!!`
        resetAll()
    }
}

function updateScoreBoard() {
    playerScoreBoard.textContent = playerScore
    computerScoreBoard.textContent = computerScore

}

function resetAll() {
    playerScore = 0
    computerScore = 0
    playerOutput.textContent = "?"
    computerOutput.textContent = "?"
    updateScoreBoard()
}

rockButton.addEventListener("click", () => {
    playerOutput.textContent = "✊"
    playGame("rock");
});

paperButton.addEventListener("click", () => {
    playerOutput.textContent = "🖐️"
    playGame("paper");
});

scissorButton.addEventListener("click", () => {
    playerOutput.textContent = "✌️"
    playGame("scissor");
});

restartButton.addEventListener("click", () => {
    /* reset */
    resetAll()
});