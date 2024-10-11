function getComputersChoice() {
    if (Math.random() < 0.33) {
        return "rock";
    } else if (Math.random() < 0.66) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getUsersChoice() {

    const usersChoice = prompt("Please enter your choice between Rock, Paper and Scissors:");
    return usersChoice;


}

//returns the winner of the round.
function playRound(usersChoice,computersChoice) {
    if (usersChoice == computersChoice) {
        console.log(
            `You both used ${usersChoice} so this is a tie!`
        );
        
        return null;
    }else if (
        String(usersChoice).toLowerCase() == "rock" && computersChoice == "scissors" ||
        String(usersChoice).toLowerCase() == "paper" && computersChoice == "rock" ||
        String(usersChoice).toLowerCase() == "scissors" && computersChoice == "paper"
    ) {
        console.log(`Your ${usersChoice} ${
            usersChoice === "rock" ? "broke" :
            usersChoice === "paper" ? "covered" : "cut"
        } computer's ${computersChoice}!
        `);
        
        return "user";
    }else {
        console.log(`Your ${usersChoice} ${
            usersChoice === "rock" ? "was covered" :
            usersChoice === "paper" ? "was cut" : "were broken"
        } by computer's ${computersChoice}`
    );
        return "computer";
    }
}


playRound(getUsersChoice(), getComputersChoice());