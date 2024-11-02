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

        const roundWinner = playRound(usersChoice, computersChoice);
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

        if (userScore === 5 || computerScore === 5) {
            let gameResult;
            let gameResultMessage;
            if (userScore === 5) {
                gameResult = "You won the game!"
            } else {
                gameResult = "You lost the game :("
            }
            gameResultMessage = "Game over, choose one item to play again :)";
            roundResultElement.textContent = gameResult;
            roundResultMessageElement.textContent = gameResultMessage;
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
        changeBGColor(btn,"#393e46");
    });

    btn.addEventListener("mousedown",()=>{
        changeBGColor(btn, "#7b8190");
    });

    btn.addEventListener("mouseup",()=>{
        changeBGColor(btn, "#484d53");
    });
})

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
function playRound(usersChoice, computersChoice) {
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

function getEquivalentEmoji(choice) {
    if (choice === "rock") return "✊";
    else if (choice === "paper") return "✋";
    else return "✌";
}

function getRoundMessage(usersChoice, computersChoice) {
    if (usersChoice ?? "".toLowerCase() === computersChoice.toLowerCase()) {
        return `You both used ${usersChoice}!`
    } else if (
        String(usersChoice).toLowerCase() === "rock" && computersChoice === "scissors" ||
        String(usersChoice).toLowerCase() === "paper" && computersChoice === "rock" ||
        String(usersChoice).toLowerCase() === "scissors" && computersChoice === "paper"
    ) {
        return (`Your ${usersChoice} ${usersChoice === "rock" ? "broke" :
            usersChoice === "paper" ? "covered" : "cut"
        } computer's ${computersChoice}!
            `);

    } else if (
        String(usersChoice).toLowerCase() === "rock" ||
        String(usersChoice).toLowerCase() === "paper" ||
        String(usersChoice).toLowerCase() === "scissors"
    ) {
        return (`Your ${usersChoice} ${usersChoice === "rock" ? "was covered" :
                usersChoice === "paper" ? "was cut" : "were broken"
            } by computer's ${computersChoice}`
        );
    }
}

function changeBGColor(element, color) {
    element.style.backgroundColor = color;
}