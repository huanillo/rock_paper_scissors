/*Rock, paper, scissor game against the computer. 
Computer has to take a random choice between rock, paper or scissors, also, it has to 
get our choice and calculate the winner.*/

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



//TAKE the human choice. Function name: getHumanChoice
function getHumanChoice(){
   
    //PROMPT user to write a choice.
    let humanChoice = prompt("Rock, paper or scissors?")

    if (!humanChoice) {  // if is null or empty 
        return "Invalid choice";  
    }

    //RETURN that choice and make it case-insensitive.
    return humanChoice.toLowerCase();;
}


//COMPARE both choices to know who wins
function  playRound(){

    let human = getHumanChoice();
    if ((human != "paper") && (human != "rock") && (human != "scissors")){  // No prompt, we finish
        return "No valid choice made.";  
    }
    let computer = getComputerChoice();
    console.log("Human chose:", human);
    console.log("Computer chose:", computer);

    if (human === "rock" && computer === "paper"){
        return "YOU LOSE! Paper beats rock";
    }
    else if (human === "rock" && computer === "scissors"){
        return "YOU WIN! Rock beats scissors";
    }
    else if (human === "paper" && computer === "rock"){
        return "YOU WIN! Paper beats rock";
    }
    else if (human === "paper" && computer === "scissors"){
        return "YOU LOSE! Scissors beats papers";
    }
    else if (human === "scissors" && computer === "rock"){
        return "YOU LOSE! Rock beats scissors";
    }
    else if (human === "scissors" && computer === "paper"){
        return "YOU WIN! Scissors beats paper";
    }
    else {
        return "TIE!";
    }
}

console.log(playRound());
//TRACK players score. Functions name: humanScore and computerScore. 
//Initialize those variables with a value of 0.