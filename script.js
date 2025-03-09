function addElement() {
    // Create continer for buttons
    const newDiv = document.createElement("div");

    // Create rock, paper and scissors buttons
    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    rockBtn.addEventListener("click", () => playRound("rock"));
  
    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    paperBtn.addEventListener("click", () => playRound("paper"));
  
    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";
    scissorsBtn.addEventListener("click", () => playRound("scissors"));
  
    // Add buttons to div
    newDiv.appendChild(rockBtn);
    newDiv.appendChild(paperBtn);
    newDiv.appendChild(scissorsBtn);
  
    // Add buttons div to body
    document.body.appendChild(newDiv);

    // Create container for results
    const resultsDiv = document.createElement("div");
    resultsDiv.id = "results";  // ID to access later
    resultsDiv.style.marginTop = "20px";
    resultsDiv.style.fontSize = "20px";
    document.body.appendChild(resultsDiv); // Add to body
  }
  
  // Call the function so the buttons appear when the pages loads
  addElement();


//RETURN rock, paper or scissors randomly. Function name: getComputerChoice
function getRandom(){
    return Math.floor(Math.random() * 3); //RETURNS a number between 0 and 2
}
function getComputerChoice(){
    //IF getComputerChoice is 0 -> Rock
    let computerChoice = getRandom();
    if (computerChoice === 0){
        return "rock";
    }
    
    //IF getComputerChoice is 1 -> Paper
    else if (computerChoice === 1){
        return "paper";
    }
    //IF getComputerChoice is 2 -> Scissors
    else {   
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;
//COMPARE both choices to know who wins
function  playRound(human){
    let resultMessage;
    let computer = getComputerChoice();
    console.log("Human chose:", human);
    console.log("Computer chose:", computer);
    if (humanScore === 5 || computerScore === 5) {
        return; // Used tostop the game if someone gets 5 points
    }

    if (human === "rock" && computer === "paper"){
        resultMessage = "YOU LOSE! Paper beats rock";
        computerScore ++;
    }
    else if (human === "rock" && computer === "scissors"){
        resultMessage = "YOU WIN! Rock beats scissors";
        humanScore ++;
    }
    else if (human === "paper" && computer === "rock"){
        resultMessage = "YOU WIN! Paper beats rock";
        humanScore ++;
    }
    else if (human === "paper" && computer === "scissors"){
        resultMessage = "YOU LOSE! Scissors beats papers";
        computerScore ++;
    }
    else if (human === "scissors" && computer === "rock"){
        resultMessage = "YOU LOSE! Rock beats scissors";
        computerScore ++;
    }
    else if (human === "scissors" && computer === "paper"){
        resultMessage = "YOU WIN! Scissors beats paper";
        humanScore ++;
    }
    else {
        resultMessage = "TIE!";
    }
    // Show message on div
    const resultsDiv = document.getElementById("results");
    resultsDiv.textContent = `${resultMessage} | Score - You: ${humanScore} | Computer: ${computerScore}`;

    // Checks for winner
    if (humanScore === 5 || computerScore === 5) {
    resultsDiv.textContent += humanScore === 5 ? "YOU WIN THE GAME!" : "COMPUTER WINS THE GAME!";
    }
}
