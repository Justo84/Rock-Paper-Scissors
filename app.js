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
        alert(`Invalid choice. ${DEFAULT_CHOICE} was chosen for you!`)
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

const getWinner = function (cChoice, pChoice = DEFAULT_CHOICE) {
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
    gameIsRunning = false;
})

// not part of the game

// this builds an array inside of the function for when you don't know how many arguments you're getting
// this is called Rest parameter
// it must be the last parameter if there are more than one
const sumUp = (resultHandler, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    }
    let sum = 0;
    for (numb of numbers) {
        sum += validateNumber(numb)
    };
    resultHandler(sum); // call back function pointing to showResult, through the sumUp function call below
};

const showResult = (result) => {
    gameStatus.innerText = `This sumUp function is telling us... ${result}`
}

sumUp(showResult, 33, 21, "pizza", 1, 2, -5, -100, 202)
console.log(sumUp(1, 33, 21, "pizza", 1, 2, -5, -100, 202))

