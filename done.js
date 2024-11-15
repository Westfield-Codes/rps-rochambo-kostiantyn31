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
}

/* userTurn */ 
function userTurn() {
    let choice = prompt("Enter r, p or s")
    if (choice != "r" && choice != "p" && choice != "s") {
        alert("Must be r, p or s ")
        return userTurn();
    }
    else return choice;
}

/* cpuTurn */ 
function cpuTurn() {
    let choice = Math.floor(Math.random()*2);
    if (choice == 0) return "r"; 
    else if (choice == 1) return "p";
    else return "s";
}

/* findwinner */ 
function findwinner(u, c) {
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
}