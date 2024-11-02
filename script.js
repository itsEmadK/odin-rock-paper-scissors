let userScore = 0;
let computerScore = 0;

//Result section elements:
const roundResultElement = document.querySelector(".round-result");
const roundResultMessageElement = document.querySelector(".round-result-message");

//Score section elements:
const playersLastMoveElement = document.querySelector(".player-last-move");
const computersLastMoveElement = document.querySelector(".computer-last-move");
const playerScoreElement = document.querySelector(".player-score");
const computerScoreElement = document.querySelector(".computer-score");

//Buttons:
const choiceButtons = document.querySelectorAll(".btn.choice");


choiceButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const elementClassList = [...e.target.classList];
        const computersChoice = getComputersChoice();
        let usersChoice;
        if (elementClassList.includes("rock")) {
            usersChoice = "rock";
        } else if (elementClassList.includes("paper")) {
            usersChoice = "paper";
        } else {
            usersChoice = "scissors";
        }

        playersLastMoveElement.textContent = getEquivalentEmoji(usersChoice);
        computersLastMoveElement.textContent = getEquivalentEmoji(computersChoice);

        const roundWinner = calculateRoundWinner(usersChoice, computersChoice);
        const roundMessage = getRoundMessage(usersChoice, computersChoice);

        switch (roundWinner) {
            case "user":
                roundResultElement.textContent = "You won!";
                userScore++;
                break;
            case "computer":
                roundResultElement.textContent = "You lost :(";
                computerScore++;
                break;
            default:
                roundResultElement.textContent = "It's a tie :)";

        }

        roundResultMessageElement.textContent = roundMessage;

        playerScoreElement.textContent = `Player: ${userScore}`;
        computerScoreElement.textContent = `Computer: ${computerScore}`;

        const gameWinner = calculateGameWinner(userScore, computerScore);
        if (gameWinner !== null) { //The game has a winner
            if (gameWinner === "user") roundResultElement.textContent = "You won!";
            else if (gameWinner === "computer") roundResultElement.textContent = "You lost :(";

            roundResultMessageElement.textContent = "Game over; choose rock, paper or scissors to start again!";
            userScore = 0;
            computerScore = 0;
        }

    })
})

choiceButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        changeBGColor(btn, "#484d53");
    });

    btn.addEventListener("mouseleave", () => {
        changeBGColor(btn, "#393e46");
    });

    btn.addEventListener("mousedown", () => {
        changeBGColor(btn, "#7b8190");
    });

    btn.addEventListener("mouseup", () => {
        changeBGColor(btn, "#484d53");
    });
})

//returns the random choice of computer.
function getComputersChoice() {

    const random = Math.random()

    if (random < 0.33) {
        return "rock";
    } else if (random < 0.66) {
        return "paper";
    } else {
        return "scissors"
    }
}

//returns the winner of the round.
function calculateRoundWinner(usersChoice, computersChoice) {
    if (usersChoice.toLowerCase() === computersChoice.toLowerCase()) {
        return null;
    } else if (
        String(usersChoice).toLowerCase() === "rock" && computersChoice === "scissors" ||
        String(usersChoice).toLowerCase() === "paper" && computersChoice === "rock" ||
        String(usersChoice).toLowerCase() === "scissors" && computersChoice === "paper"
    ) {
        return "user";
    } else if (
        String(usersChoice).toLowerCase() === "rock" ||
        String(usersChoice).toLowerCase() === "paper" ||
        String(usersChoice).toLowerCase() === "scissors"
    ) {
        return "computer";
    }
}

//returns the corresponding symbol based on the choice.
function getEquivalentEmoji(choice) {
    if (choice === "rock") return "✊";
    else if (choice === "paper") return "✋";
    else return "✌";
}

//returns the message of the round result based on the choices.
function getRoundMessage(usersChoice, computersChoice) {
    if (calculateRoundWinner(usersChoice, computersChoice) === "user") {
        return (`Your ${usersChoice} ${usersChoice === "rock" ? "broke" :
            usersChoice === "paper" ? "covered" : "cut"
        } computer's ${computersChoice}!
            `);

    } else if (calculateRoundWinner(usersChoice, computersChoice) === "computer") {
        return (`Your ${usersChoice} ${usersChoice === "rock" ? "was covered" :
                usersChoice === "paper" ? "was cut" : "were broken"
            } by computer's ${computersChoice}`
        );
    }
}

//changes the background color of the given element.
function changeBGColor(element, color) {
    element.style.backgroundColor = color;
}

//returns the winner of the game based on the scores.
function calculateGameWinner(userScore, computerScore) {
    if (userScore === 5) return "user";
    else if (computerScore === 5) return "computer";
    else return null;
}