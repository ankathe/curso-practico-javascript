let stone = "stone";
let paper = "paper";
let scissors = "scissors";

function game(player1,player2){
    if ((player1===stone && player2===scissors) || (player1===paper && player2===stone) || (player1===scissors && player2===paper)){
        console.log("player1 wins");
    } else if ((player2===stone && player1===scissors) || (player2===paper && player1===stone) || (player2===scissors && player1===paper)){
        console.log("player2 wins")
    } else { 
        console.log("tied");
    }
}

game(stone,paper);
game(paper,stone);
game(scissors,stone);
game(paper,stone);
game(scissors,paper);
game(paper,paper);

// other answer 

let stone = "stone";
let paper = "paper";
let scissors = "scissors";

function game(player1,player2){
    const c1 = player1===stone && player2===scissors;
    const c2 = player1===paper && player2===stone;
    const c3 = player1===scissors && player2===paper
    const c4 = player2===stone && player1===scissors
    const c5 = player2===paper && player1===stone
    const c6 = player2===scissors && player1===paper

    if (c1|| c2 || c3){
        console.log("player1 wins");
    } else if (c4 || c5|| c6){
        console.log("player2 wins")
    } else { 
        console.log("tied");
    }
}

game(stone,paper);
game(paper,stone);
game(scissors,stone);
game(paper,stone);
game(scissors,paper);
game(paper,paper);