
function main(){
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice){
        uChoice = userTurn();
        cChoice = cpuTurn();
        if (uChoice == cChoice){
            alert("We've both chosen the same move! We must now DANCE.");
            alert("and by DANCE, I mean go again!");
        }
    }
    findWinner(uChoice, cChoice);
}

function userTurn(move){
    switch (move){
        case 1:
            alert("You've selected rock.");
            return "r";
        case 2:
            alert("You've selected paper.");
            return "p";
        case 3:
            alert("You've selected scissors.");
            return "s";
        default:
            alert("It's your turn. Please, select a move!");
            break;
    }
    
}

function cpuTurn() {
    let choice = Math.floor(Math.random()*3);
    if (choice == 0) {
        alert("Rock");
        return "r";
    } 
    else if (choice == 1) {
        alert("Paper");
        return "p";
    } 
    else {
        alert("Scissors");
        return "s";
    } 
}

function findWinner(uChoice, cChoice) {
    let winner = "undefined";
    if ( uChoice == "r" ) {
        if ( cChoice == "s" ) winner = "player";
        else winner = "cpu"; 
    }
    else if ( uChoice == "s" ) {
        if ( cChoice == "p" ) winner = "player";
        else winner = "cpu";
    }
    else {
        if ( cChoice == "r" ) winner = "player";
        else winner = "cpu";
    }
    alert("You pick " + uChoice + " CPU pick " + cChoice + ". " + winner + " win");
}
