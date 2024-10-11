function getComputersChoice() {
    if (Math.random() < 0.33) {
        return "Rock";
    } else if (Math.random() < 0.66) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

