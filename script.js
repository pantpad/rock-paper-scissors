//Your game is going to play against the computer
//Use prompt() to get input from the user. Read the docs here if you need to.

console.log("worka full");

//take input from user
/*
let input = prompt("cosa scegli?");
console.log(input);
*/
console.info("Inizieremo ora a giocare a carta-forbice-sasso");

/* 
getComputerChoice(), returns a string based on the random number between 1 and 3.
It uses a random number generator between 1 and 3 to select the computer choice in playing the game.
Random number generation is done with math.random().
*/
function getComputerChoice(){

    let choice = getRandomNumber();
    
    switch(choice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }

}

/**
 * getRandomNumber()
 * @returns a number between 1 and 3
 */
function getRandomNumber(){
    return Math.floor(Math.random() * (3-1+1)+1);
}

//console.log(getComputerChoice());


/**
 * getUserInput() pops a promt asking for a
 * 
*/
function getUserInput(){
    let yourchoice = prompt("Choose your item: \n1 - Rock \n2 - Paper \n3- Scissors", "1")

    if(isNaN(Number(yourchoice))){yourchoice = "default";}

    switch (yourchoice)
    {
        case "1":
            alert("You chose Rock");
            return "rock";
            break;
        case "2":
            alert("You chose Paper");
            return "paper";
            break;
        case "3":
            alert("You chose Scissors");
            return "scissors";
            break;
        default:
            alert("You did not choose a correct item");
            getUserInput();
            break;
    }
}

console.log(getUserInput());

/**
 * playRPSRound() plays a single rock paper scissors round
 * 
 * **/
function playRPSRound(){
    let cpu = getComputerChoice();
    
}