const startGameBtn = document.getElementById('start-game-btn');
const gameStatus = document.getElementById('message');
const playerStatus = document.getElementById('player-choice');
const computerStatus = document.getElementById('computer-choice');

const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"
const DEFAULT_CHOICE = getRandomChoice()
const RESULT_DRAW = "DRAW"
const PLAYER_WINS = "YOU WON"
const COMPUTER_WINS = "COMPUTER WON"

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice. You pick ${DEFAULT_CHOICE}!`)
        return DEFAULT_CHOICE
    }
    return selection
}

function getRandomChoice() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const randomValue = getRandomInt(3)
    if (randomValue === 0) {
        return ROCK
    }
    if (randomValue === 1) {
        return PAPER
    }
    if (randomValue === 2) {
        return SCISSORS
    }
}

const getWinner = function(cChoice, pChoice) {
    if (cChoice === pChoice) {
        return RESULT_DRAW
    } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
        return PLAYER_WINS
    } else {
        return COMPUTER_WINS
    }
}

startGameBtn.addEventListener("click", () => {
    if (gameIsRunning) {
        return
    }
    gameIsRunning = true
    console.log("Game is starting...")
    const playerSelection = getPlayerChoice();
    playerStatus.innerText = playerSelection
    const computerSelection = getRandomChoice();
    computerStatus.innerText = computerSelection
    const winner = getWinner(computerSelection, playerSelection)
    let message;
    if (winner === RESULT_DRAW) {
        message = "A draw"
    } else if (winner === PLAYER_WINS) {
        message = "You won!"
    } else {
        message = "Computer won!"
    }
    gameStatus.innerText = message
}) 