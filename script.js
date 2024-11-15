var score = [0,1]


/* main */ 
function main() {
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice ) {
        uChoice = userTurn();
        cChoice = cpuTurn();
        if ( uChoice == cChoice ) alert("We both picked " + cChoice);
    }
    findwinner(uChoice, cChoice);
    alert("You pick " + uChoice + " cpu pick " + cChoice + ". " + winner + " win");
}

/* userTurn */ 
/* function userTurn() {
    let choice = prompt("Enter r, p or s");
    if (choice != "r" && choice != "p" && choice != "s") {
        alert("Must be r, p or s ");
        return userTurn();
    }
    else return choice;
} */

function userTurn() {
    let moves = ["r", "p", "s"];
    let choice = prompt("Enter r, p or s");
    if (moves.includes(choice)) {
       return choice; 
    }
     else {
        alert("Must be r, p or s ");
        return choice;
     }
}

/* cpuTurn */ 
/* function cpuTurn() {
    let choice = Math.floor(Math.random()*2);
    if (choice == 0) return "r"; 
    else if (choice == 1) return "p";
    else return "s";
} */

function cpuTurn() {
    let moves = ["r", "p", "s"];
    let choice = Math.floor(Math.random()*2);
    return moves[choice];
}

/* findwinner */ 
/* function findwinner(u, c) {
    let winner = "";
    if (u == "r") {
        if ( c == "p") winner = "cpu";
        else winner = "You";
    }
    else if (u == "p") {
        if ( c == "s") winner = "cpu";
        else winner = "You";
    }
    else {
        if ( c == "r") winner = "cpu";
        else winner = "You";
    }
    alert("You pick " + u + " cpu pick " + c + ". " + winner + " win");
} */

function findwinner(u, c) {
    let winArray=[
        ["r","p","player"],["r","s","cpu"],
        ["p","s","player"],["p","r","cpu"],
        ["s","r","player"],["s","p","cpu"]];
    turns = u+c;
    for ( let i = 0; i < winArray.length; i++ ) {
        match = winArray[i][0] + winArray[i][1];
        if (match == turns) {
            winner = winArray[i][2];
            return winner;
        } 
    }           
}  