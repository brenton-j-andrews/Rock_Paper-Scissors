function computerPlay() {
    let moves = ["rock", "paper", "scissors"];
    let rand_index = Math.floor(Math.random() * 3);
    return moves[rand_index];
}

function playRound(playerMove, computerMove) {
    console.log("Player plays: " + playerMove);
    console.log("Computer plays: " + computerMove);
    let victory = null;

    if (playerMove === "scissors" && computerMove === "paper") {
        victory = true;
    } else if (playerMove === "scissors" && computerMove === "rock") {
        victory = false;
    } else if (playerMove === "rock" && computerMove === "scissors") {
        victory = true;
    } else if (playerMove === "rock" && computerMove === "paper") {
        victory = false;
    } else if (playerMove === "paper" && computerMove === "rock") {
        victory = true;
    } else if (playerMove === "paper" && computerMove === "scissors") {
        victory = false;
    } 

    if (victory) {
        console.log(`You win! ${playerMove} beats ${computerMove}.`);
    } else if (victory == false) {
        console.log(`You lose... ${computerMove} beats ${playerMove}.`);
    } else {
        console.log("Its a tie!");
    } 

    return victory;

}

function game() {
    let player_wins = 0;
    let computer_wins = 0;
    let outcome = null;

    // Iterate over game sequence 5 times.
    for (let i = 0; i < 5; i++) {
        playerMove = prompt("Choose 'Rock', 'Paper', 'Scissors': ").toLowerCase();
        outcome = playRound(playerMove, computerPlay());

        if (outcome) {
            player_wins++;
        } else if (outcome == false) {
            computer_wins++;
        }
        console.log(`Current score: Player ${player_wins}, computer ${computer_wins}`)
    }

    // Compare final player_wins and computer_wins score counts to determine a winner, if there is one.
    if (player_wins > computer_wins) {
        console.log(`Final score: ${player_wins} vs ${computer_wins}. Player wins!`)
    } else if (computer_wins > player_wins) {
        console.log(`Final score: ${computer_wins} vs ${player_wins}. Computer wins!`)
    } else {
        console.log(`Final score: ${computer_wins} vs ${player_wins}. It is a tie!`)
    }

}

game();