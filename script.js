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

function getUsersChoice() {

    const usersChoice = prompt("Please enter your choice between Rock, Paper and Scissors:");
    return usersChoice;


}

//returns the winner of the round.
function playRound(usersChoice, computersChoice) {
    if (usersChoice??"".toLowerCase() === computersChoice.toLowerCase()) {
        console.log(
            `You both used ${usersChoice} so this is a tie!`
        );

        return null;
    } else if (
        String(usersChoice).toLowerCase() === "rock" && computersChoice === "scissors" ||
        String(usersChoice).toLowerCase() === "paper" && computersChoice === "rock" ||
        String(usersChoice).toLowerCase() === "scissors" && computersChoice === "paper"
    ) {
        console.log(`Your ${usersChoice} ${usersChoice === "rock" ? "broke" :
            usersChoice === "paper" ? "covered" : "cut"
        } computer's ${computersChoice}!
            `);

        return "user";
    } else {

        if (
            String(usersChoice).toLowerCase() === "rock" ||
            String(usersChoice).toLowerCase() === "paper" ||
            String(usersChoice).toLowerCase() === "scissors"
        ) {
            console.log(`Your ${usersChoice} ${usersChoice === "rock" ? "was covered" :
                    usersChoice === "paper" ? "was cut" : "were broken"
                } by computer's ${computersChoice}`
            );
        } else {
            console.log(usersChoice == null ? "You forfeited the round!" :
                "You got disqualified this round due to using an unknown object!")
            ;
        }

        return "computer";
    }
}