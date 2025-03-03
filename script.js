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
console.log(getComputerChoice());


//TAKE the human choice. Function name: getHumanChoice
function getHumanChoice(){
   
    //PROMPT user to write a choice and make it case-insensitive.
    let humanChoice = prompt("Rock, paper or scissors?").toLowerCase();
    
    //RETURN that choice
    return humanChoice;
}
console.log(getHumanChoice());
//COMPARE both choices to know who wins

//TRACK players score. Functions name: humanScore and computerScore. 
//Initialize those variables with a value of 0.