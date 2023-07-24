const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
const POINTS_TO_WIN = 5;

let cpuPoints = 0;
let userPoints = 0;

const startPlayingBtn = document.getElementById('play');
const userChoices = document.querySelectorAll('.user');

const cpuChoice = document.getElementById('cpu-choice');
const userChoice = document.getElementById('user-choice');

const cpuResult = document.querySelector('.cpu-result');
const userResult = document.querySelector('.user-result');

const cpuScore = document.getElementById('cpu-score');
const userScore = document.getElementById('user-score');

userChoices.forEach(choice => choice.addEventListener('click',(e) => {
    
    playRPSUIRound(e);
    if(isGameOver(cpuPoints,userPoints)){
        (cpuPoints>userPoints ? setTextBtn(startPlayingBtn,"HAI PERSO!") : setTextBtn(startPlayingBtn,"HAI VINTO!"));
        startEndRound();
    }    
    //playRound(), prende input cpu, prende input user, compara, segna a schermo il vincitore o il pareggio, controlla se il game e' finito, 
    //mette a schermo bottone di play game o play round in base all'andamento del gioco
    
}));


startPlayingBtn.addEventListener('click',(e) => {
    if(startPlayingBtn.value!="Play Game" && startPlayingBtn.value!="Play Round"){
        resetPoints();
        resetResults();
        setTextBtn(startPlayingBtn,"Play Game");
    }
    startEndRound();
    setTextBtn(startPlayingBtn,"Play Round");
});

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

/**
 * function will toggle the button to hidden/block 
 * 
 */
function toggleHidden(button){
    
    if (button.style.display === "none"){
        button.style.display = "block";
    }else{
        button.style.display = "none";
    }
}

/**
 * Function will apply toggleHidden to start / end the round 
 */

function startEndRound(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => toggleHidden(button));
}

/**
 * function will set the play button text to play game or play round 
 */

function setTextBtn(button,text){
    button.textContent = text;
}

/**
 * playRPSUIRound() plays a single rock paper scissors round
 * playRound(), prende input cpu, prende input user, compara, segna a schermo il vincitore o il pareggio, aggiorna i punti, controlla se il game e' finito, 
   mette a schermo bottone di play game o play round in base all'andamento del gioco
 * **/
function playRPSUIRound(user){
    //reset previous div text results
    resetResults();
    let cpu = getComputerChoice();

    //put on screen -> cpu and user choice
    cpuChoice.textContent = (cpu == 1 ? "ROCK" : (cpu == 2 ? "PAPER" : "SCISSORS"));
    userChoice.textContent = user.target.textContent.toUpperCase();
    //compare them to add points and return who WON
    switch(roundResultUI(cpu,user.target.value)){
        case "CPU":
            cpuResult.textContent = "WINNER";
            userResult.textContent = "LOSER";
            break;
        case "USER":
            userResult.textContent = "WINNER";
            cpuResult.textContent = "LOSER";
            break;
        case "DRAW":
            cpuResult.textContent = userResult.textContent = "DRAW";
            break;
    }

    //add point to screen
    cpuScore.textContent = cpuPoints;
    userScore.textContent = userPoints;

}

function resetChoices(){
    cpuChoice.textContent = "";
    userChoice.textContent = "";
}

function resetResults(){
    userResult.textContent = cpuResult.textContent =  "";
}

function resetPoints(){
    userPoints = 0;
    cpuPoints = 0;
    userScore.textContent = "USER: 0";
    cpuScore.textContent ="CPU: 0";
}

/**
 * compara, segna a schermo il vincitore o il pareggio, aggiorna i punti
 * 
 */
function roundResultUI(computerChoice,userChoice,){
    if(computerChoice == userChoice){
        return "DRAW";
    }

    if(computerChoice == ROCK){
        if(userChoice == SCISSORS){
            cpuPoints++;
            return "CPU";
        }
        userPoints++;
        return "USER";
    }

    if(computerChoice == PAPER){
        if(userChoice == ROCK){
            cpuPoints++;
            return "CPU";
        }
        userPoints++;
        return "USER";
    }

    if(computerChoice == SCISSORS){
        if(userChoice == PAPER){        
            cpuPoints++;
            return "CPU";
        }
        userPoints++;
        return "USER";
    }

}

function isGameOver(cpuPoints,userPoints){
    return (cpuPoints >= POINTS_TO_WIN || userPoints >= POINTS_TO_WIN);
}