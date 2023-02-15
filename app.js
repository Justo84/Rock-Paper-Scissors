const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"
const DEFAULT_CHOICE = getRandomChoice()

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

startGameBtn.addEventListener("click", () => {
    if (gameIsRunning) {
        return
    }
    gameIsRunning = true
    console.log("Game is starting...")
    const playerSelection = getPlayerChoice();
    console.log(playerSelection)
}) 