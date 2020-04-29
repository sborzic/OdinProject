function computerPlay(){
  let rndNum = Math.floor(Math.random()*3)
  let options = ['rock', 'paper', 'scissors']
  return options[rndNum];
}

function playerPlay(){
  let play = prompt('Rock, paper or scissors?')
  return play.toLowerCase();
}

function game(){
  let playerScore = 0;
  let compScore = 0;
  for(i=1; i<=5; i++){
    let compSelection = computerPlay();
    let playerSelection = playerPlay();
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
  }
}