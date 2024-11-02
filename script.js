//Result section elements:
const roundResult = document.querySelector(".round-result");
const roundResultMessage = document.querySelector(".round-result-message");

//Score section elements:
const playersLastMove = document.querySelector(".player-last-move");
const computersLastMove = document.querySelector(".computer-last-move");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

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

        playersLastMove.textContent = getEquivalentEmoji(usersChoice);
        computersLastMove.textContent = getEquivalentEmoji(computersChoice);

        const roundWinner = playRound(usersChoice, computersChoice);
        const roundMessage = getRoundMessage(usersChoice, computersChoice);

        switch (roundWinner){
            case "user":
                roundResult.textContent = "You won!";
                break;
            case "computer":
                roundResult.textContent = "You lost :(";
                break;
            default:
                roundResult.textContent = "It's a tie :)";

        }

        roundResultMessage.textContent = roundMessage;

    })
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