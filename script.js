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
    if ((human !== "paper") && (human !== "rock") && (human !== "scissors")){
        return "No valid choice made.";  
    }
    let computer = getComputerChoice();
    console.log("Human chose:", human);
    console.log("Computer chose:", computer);

    if (human === "rock" && computer === "paper"){
        return { message: "YOU LOSE! Paper beats rock", result: 0 };
    }
    else if (human === "rock" && computer === "scissors"){
        return { message: "YOU WIN! Rock beats scissors", result: 1 };
    }
    else if (human === "paper" && computer === "rock"){
        return { message: "YOU WIN! Paper beats rock", result: 1 };
    }
    else if (human === "paper" && computer === "scissors"){
        return { message: "YOU LOSE! Scissors beats papers", result: 0 };
    }
    else if (human === "scissors" && computer === "rock"){
        return { message: "YOU LOSE! Rock beats scissors", result: 0 };
    }
    else if (human === "scissors" && computer === "paper"){
        return { message: "YOU WIN! Scissors beats paper", result: 1 };
    }
    else {
        return { message: "TIE!", result: 2 };
    }
}
//TRACK players score. Functions name: humanScore and computerScore. 
//Initialize those variables with a value of 0.

//CREATE function called playGame that plays 5 rounds and tracks the scores.
function playGame(){
    let round = 0;
    let humanScore = 0;
    let computerScore = 0;

    while (round < 5 ){
        let result = playRound();  // Get the result of the round
        console.log(result.message);  // Show the message of the round
        if (result.result === 1){
            humanScore ++;
        }
        else if (result.result === 0){
            computerScore++;
        }
        else{
            computerScore++;
            humanScore++;
        }
            round++
        }
    return 'FINAL SCORE: \n Human: ' + humanScore + '\n Computer:' + computerScore;
}
console.log(playGame());