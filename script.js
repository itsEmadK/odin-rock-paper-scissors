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
    return usersChoice();


}