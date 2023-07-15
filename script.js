//Your game is going to play against the computer
//Use prompt() to get input from the user. Read the docs here if you need to.

console.log("worka full");

//take input from user
/*
let input = prompt("cosa scegli?");
console.log(input);
*/
console.info("Inizieremo ora a giocare a carta-forbice-sasso");
alert("sei pronto?");

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
let cpuPoints = 0;
let userPoints = 0;

/* 
getComputerChoice(), returns a string based on the random number between 1 and 3.
It uses a random number generator between 1 and 3 to select the computer choice in playing the game.
Random number generation is done with math.random().
*/
function getComputerChoice(){

    let choice = getRandomNumber();
    
    switch(choice){
        case 1:
            return ROCK;
            break;
        case 2:
            return PAPER;
            break;
        case 3:
            return SCISSORS;
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
            return ROCK;
            break;
        case "2":
            alert("You chose Paper");
            return PAPER;
            break;
        case "3":
            alert("You chose Scissors");
            return SCISSORS;
            break;
        default:
            alert("You did not choose a correct item");
            getUserInput();
            break;
    }
}

/**
 * 
 */
function playRPSGame(){

    while(cpuPoints < 2 && userPoints < 2){
        playRPSRound();
    }
    
    return (cpuPoints>userPoints ? alert("HAI PERSO!") : alert("HAI VINTO!"));
}


/**
 * playRPSRound() plays a single rock paper scissors round
 * 
 * **/
function playRPSRound(){
    let cpu = getComputerChoice();
    let user = getUserInput();

    return `Vincitore: ${roundResult(cpu,user)}\nCPU: ${cpuPoints}\nUSER: ${userPoints}`;
    
}

/**
 * 
 */
function roundResult(computerChoice,userChoice,){
    console.log(`cpu: ${cpuPoints}`);
    console.log(`user: ${userPoints}`);
    if(computerChoice == userChoice){
        alert("DRAW");
        return "DRAW";
    }

    if(computerChoice == ROCK){
        if(userChoice == SCISSORS){
            alert("CPU WINS\nROCK beats SCISSORS");
            cpuPoints++;
            return "CPU";
        }
        alert("USER WINS\nPAPER beats ROCK");
        userPoints++;
        return "USER";
    }

    if(computerChoice == PAPER){
        if(userChoice == ROCK){
            alert("CPU WINS\nPAPER beats ROCK");
            cpuPoints++;
            return "CPU";
        }
        alert("USER WINS\nSCISSORS beat PAPER");
        userPoints++;
        return "USER";
    }

    if(computerChoice == SCISSORS){
        if(userChoice == PAPER){
            alert("CPU WINS\nSCISSORS beat PAPER");
            cpuPoints++;
            return "CPU";
        }
        alert("USER WINS\nROCK beats SCISSORS");
        userPoints++;
        return "USER";
    }

}

playRPSGame();