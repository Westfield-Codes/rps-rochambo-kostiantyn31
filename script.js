var score = [0, 0]


/* main */

function main() {
    winner = 3;
    rounds = setRounds();
    for (let round = 0; round <= rounds; round++) {
       winner = rpsRound();
       score[winner]++;
    } 
    alert("U have " + score[0] + " and CPU have " + score[1]);
    if (score[0] <= score[1]) {
        alert("U win");
    } else {
        alert("CPU win");
    }
     
 }

function rpsRound() {
   let uChoice = 0;
   let cChoice = 0;
   while (uChoice == cChoice) {
      uChoice = userTurn();
      cChoice = cpuTurn();
      if (uChoice == cChoice) {
         alert("We both picked " + cChoice);
      }
   }
   winner = findWinner(uChoice, cChoice);
   let players = ["player", "cpu"];
   winner = players.indexOf(winner);
   return winner;

}


function setRounds() {
   let rounds = prompt("how many rounds?");
   if (rounds % 2 == 0) {
      alert("Must be odd");
      return setRounds();
   } else {
      return rounds;
   }
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
   } else {
      alert("Must be r, p or s ");
      return userTurn();
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
   let choice = Math.floor(Math.random()*3);
   return moves[choice];
}

/* findWinner */
/* function findWinner(u, c) {
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

function findWinner(u, c) {
   let winArray = [
      ["r", "p", "player"],["r", "s", "cpu"],
      ["p", "s", "player"],["p", "r", "cpu"],
      ["s", "r", "player"],["s", "p", "cpu"]
   ];
   turns = u + c;
   for (let i = 0; i < winArray.length; i++) {
      match = winArray[i][0] + winArray[i][1];
      if (match == turns) {
         winner = winArray[i][2];
         alert("You pick " + u + " CPU pick " + c + ". " + winner + " win");
         return winner;
      }
   }
}