let buttons = Array.from(document.getElementsByTagName('button'));

buttons.forEach(button=>{
  button.addEventListener('click', playerPlay);
});

let playerScore = 0;
let compScore = 0;


function computerPlay(){
  let rndNum = Math.floor(Math.random()*3)
  let options = ['rock', 'paper', 'scissors']
  console.log(options[rndNum])
  return options[rndNum];
}

function playerPlay(event){
  let playerSelection = event.target.id
  console.log(playerSelection);
  let compSelection = computerPlay();
  game(playerSelection, compSelection); 
    
}

function updateScore(playerScore, compScore){  
  let playerBoard = document.querySelector('#player-score');
  let computerBoard = document.querySelector('#computer-score');
  playerBoard.textContent = `Player score ${playerScore}`;
  computerBoard.textContent = `Computer score ${compScore}`;
}


function game(playerSelection, compSelection){
    if (compSelection == 'rock' && playerSelection =='scissors') {
      compScore+=1;
    } else if (compSelection == 'rock' && playerSelection == 'paper'){
      playerScore+=1;
    } else if (compSelection == 'paper' && playerSelection == 'rock'){
      compScore+=1;
    } else if (compSelection == 'paper' && playerSelection == 'scissors') {
      playerScore+=1;
    } else if (compSelection == 'scissors' && playerSelection == 'rock') {
      playerScore+=1;
    } else if (compSelection == 'scissors' && playerSelection == 'paper') {
      compScore+=1;
    } else console.log('draw');
    console.log(`Player score: ${playerScore}, computer score: ${compScore}`);
    updateScore(playerScore, compScore);
    declareWinner()
}

function declareWinner(){
  if (playerScore == 5) {
    alert('Player wins');
    buttons.forEach(button=>{
      button.removeEventListener('click', playerPlay);
    });
  } else if (compScore == 5){
    alert('Computer wins');
    buttons.forEach(button=>{
      button.removeEventListener('click', playerPlay);
    });
  }

}