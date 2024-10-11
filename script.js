function playGame() {

    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        const winner = playRound(getUsersChoice(), getComputersChoice());
        switch (winner) {
            case "user":
                userScore++;
                break;

            case "computer":
                computerScore++;
                break;

            default:
                break;
        }

    }

    console.log(
        (userScore > computerScore ? `Congratulations! you have won!` :
            `Sorry, you have lost...`) +
        `Your score: ${userScore} - Computer's score:${computerScore}`
    );

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
    function playRound(usersChoice, computersChoice) {
        if (usersChoice === computersChoice) {
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
