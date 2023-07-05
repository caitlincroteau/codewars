// Let's play! You have to return which player won! In case of a draw return Draw!.
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "rock" && p2 === "scissors")
  ) {
    return "Player 1 won!";
  }

  if (
    (p2 === "scissors" && p1 === "paper") ||
    (p2 === "paper" && p1 === "rock") ||
    (p2 === "rock" && p1 === "scissors")
  ) {
    return "Player 2 won!";
  }

  if (
    (p1 === "scissors" && p2 === "scissors") ||
    (p1 === "rock" && p2 === "rock") ||
    (p1 === "paper" && p2 === "paper")
  ) {
    return "Draw!";
  }
};

//simpler!

const rps2 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  
  if (
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "rock" && p2 === "scissors")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }

};



console.log(rps("scissors", "paper"));
console.log(rps("scissors", "rock"));
console.log(rps("paper", "paper"));

console.log(rps2("scissors", "paper"));
console.log(rps2("scissors", "rock"));
console.log(rps2("paper", "paper"));
