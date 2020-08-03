const UIcontroller = (function(){
  //update field
  const fieldClicked = function(event, currPlayer){
    if(currPlayer === 'player1'){
      event.target.classList.add('playerOne');
    }else {
      event.target.classList.add('playerTwo');
    }
  }

  return {
    fieldClicked 
  }
})();


const gameController = (function(UIctrl){
  //set up players
  const player = (name, isPlaying)=>{
    const score = 0;
    return {name, isPlaying, score};
  }  
  const player1 = player('player1', true);
  const player2 = player('player2', false);
  

  const playTurn = function(event){

    let currPlayer = player1.isPlaying ? 'player1' : 'player2';

    //update field
    UIctrl.fieldClicked(event, currPlayer);
    event.target.removeEventListener('click', playTurn);

    //toggle player
    player1.isPlaying = !player1.isPlaying;
    player2.isPlaying = !player2.isPlaying;
    
    //score tracker
  }
  
  // add listeners
  const boardFields = Array.from(document.getElementsByClassName('field'));

  boardFields.forEach(field=>{
    field.addEventListener('click', playTurn);
  });  

})(UIcontroller);

