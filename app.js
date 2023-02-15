const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"
const DEFAULT_CHOICE = ROCK

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice. ${DEFAULT_CHOICE} it is!`)
        return DEFAULT_CHOICE
    }
    return selection
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