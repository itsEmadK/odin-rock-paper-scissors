function playGame() {

    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        const winner = playRound(getUsersChoice(), getComputersChoice());
        winner == "user" ? userScore++ :
            winner == "computer" ? computerScore++ : null;

    }

    console.log(
        (userScore > computerScore ? "Congratulations! you have won!" :
            (userScore < computerScore) ? "Sorry, you have lost..." :
                "It's a tie!"
        ));
    console.log(
        `Your score: ${userScore} - Computer's score:${computerScore}`
    );


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

        let usersChoice;
        let isInputValid = false;
        while (!isInputValid) {
            usersChoice = prompt("Please enter your choice between Rock, Paper and Scissors:");
            if (usersChoice == null) {
                break;
            }
            if (
                usersChoice.toLowerCase() === "rock" ||
                usersChoice.toLowerCase() === "paper" ||
                usersChoice.toLowerCase() === "scissors"
            ) {
                isInputValid = true;
            } else {
                console.log("Invalid input, try again...");
            }

        }

        return usersChoice ?? "Illegal object";


    }

    //returns the winner of the round.
    function playRound(usersChoice, computersChoice) {
        if (usersChoice.toLowerCase() === computersChoice.toLowerCase()) {
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
            console.log(`Your ${usersChoice} ${usersChoice === "rock" ? "was covered" :
                usersChoice === "paper" ? "was cut" : "were broken"
                } by computer's ${computersChoice}`
            );
            return "computer";
        }
    }

}


playGame();
