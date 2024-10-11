function getComputersChoice() {
    if (Math.random() < 0.33) {
        return "Rock";
    } else if (Math.random() < 0.66) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

function getUsersChoice() {

    const usersChoice = prompt("Please enter your choice between Rock, Paper and Scissors:");
    return usersChoice;


}

//returns the winner of the round.
function playRound(usersChoice,computersChoice) {
    if (usersChoice == computersChoice) {
        return null;
    }else if (
        String(usersChoice).toLowerCase() == "rock" && computersChoice == "scissors" ||
        String(usersChoice).toLowerCase() == "paper" && computersChoice == "rock" ||
        String(usersChoice).toLowerCase() == "scissors" && computersChoice == "paper"
    ) {
        return "user";
    }else {
        return "computer";
    }
}