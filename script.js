cpuTurn();

function cpuTurn() {
    let userChoice = Math.floor(Math.random()*3);
    if (userChoice == 0) alert("Rock");
    else if (userChoice == 1) alert("Paper");
    else alert("Scissors");
    return userChoice;
}
