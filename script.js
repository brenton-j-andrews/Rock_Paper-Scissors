let player_score = 0;
let computer_score = 0;
let player_move = null;
const moves = {0: "Rock", 1: "Paper", 2: "Scissors"};

// Generate computer move.
function computerPlay() {
    let moves = [0, 1, 2];
    let rand_index = Math.floor(Math.random() * 3);
    return Number(moves[rand_index]);
}

// Play one round of R.P.S and handle images / animations.
function playRound(playerMove, computerMove) {

    document.getElementById("player_text").textContent = `You played ${moves[playerMove]}!`
    console.log(playerMove);
    console.log(computerMove);
    let player_img = "images/battle_images/battle_" + moves[playerMove] + ".jpeg";
    let computer_img = "images/battle_images/battle_" + moves[computerMove] +"_reversed.jpeg";
    document.getElementById("player_img").src = player_img;
    document.getElementById("computer_img").src = computer_img;

    console.log(computer_img);
    document.getElementById("computer_text").textContent = `Opponent plays ${moves[computerMove]}!`
    let outcome_arr = [[0, 1, 2], [2, 0, 1], [1, 2, 0]];
    let result = outcome_arr[computerMove][playerMove];
    console.log(result);
    if (result === 0) {
        console.log("Its a tie!");
        return;
    } else if (result === 1) {
        console.log(`You win! ${moves[playerMove]} beats ${moves[computerMove]}!`);
        player_score++;
    } else if (result === 2) {
        console.log(`You loose... ${moves[computerMove]} beats ${moves[playerMove]}!`);
        computer_score++;
    }
    updateScore();
}

// Update html scoreboard. Used to avoid repitition.
function updateScore() {
    document.getElementById("player").innerHTML = `Player Score: ${player_score}`;
    document.getElementById("computer").innerHTML = `Computer Score: ${computer_score}`;
}

// Disable turn buttons, create "play again" button and reset scores.
function gameOver() {
    if (player_score == 5 || computer_score == 5) {
        let div = document.getElementById("game_over");
        if (player_score == 5) {
            document.getElementById("winner").innerHTML = "You win! Congratulations!";
        } else {
            document.getElementById("winner").innerHTML = "You loose, better luck next time!";
        }
        buttons.forEach((button) => button.disabled = true);


        // Reset images and text on the arena screen if "play_again" button pressed.
        let play_again = document.createElement("button");
        play_again.textContent = "Play again?";
        play_again.className = "again_button";
        play_again.addEventListener('click', () => {
            player_score = 0;
            computer_score = 0;
            updateScore();
            buttons.forEach((button) => button.disabled = false);
            play_again.remove();
            document.getElementById("winner").innerHTML = "Who will win?"
            document.getElementById("player_img").src = null;
            document.getElementById("computer_img").src = null;
            document.getElementById("computer_text").textContent = null;
            document.getElementById("player_text").textContent = null;

        });
        div.appendChild(play_again);
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        player_move = Number(button.id);
        playRound(player_move, computerPlay());
        gameOver();
    });
});