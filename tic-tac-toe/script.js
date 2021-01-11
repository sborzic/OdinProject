const UIcontroller = (function(){
  // SHOW PLAYER STATS
  const showStats = (players)=>{
    let statsWindow = Array.from(document.getElementsByClassName('player-wrapper'));
    for(let i=0; i<statsWindow.length; i++){
      let stats = Array.from(statsWindow[i].children);
      stats[0].innerHTML = `${players[i].name}: ${players[i].wins}`;
    }
  }
  
  //UPDATE FIELD
  const fieldClicked = function(event, currPlayer){
    if(currPlayer === 'player1'){
      event.target.setAttribute('data-value', '15');     
      event.target.classList.add('playerOne'); 
    }else {
      event.target.setAttribute('data-value', '30');
      event.target.classList.add('playerTwo');
    }
  }  
  
  const messageBar = document.getElementById('message-bar');
  //NEW GAME
  const newGame = (boardFields)=>{
    boardFields.forEach(field=>{
        field.className = "";
        field.classList.add('field')
        field.setAttribute('data-value', '1');
    })  
    messageBar.innerHTML = `NOW PLAYING...`;
  }

  //ALERT WINNER
  const alertWinner = (winner, currPlayer)=>{
    if(winner){
      messageBar.innerHTML = `${currPlayer} wins!!!`
    } else{
      messageBar.innerHTML = `a boring draw`;
    }
  }

  return {
    fieldClicked,
    newGame,
    showStats,
    alertWinner
  }
})();




const gameController = (function(UIctrl){
  //SET UP GAME  
  const player = (name, isPlaying, wins, symbol)=>{
    return {name, isPlaying, wins, symbol};
  }  
  
  const player1 = player('player1', true, 0);
  const player2 = player('player2', false, 0);

  const players = [
    player1,
    player2
  ]

  let turnsPLayed = 0;
  let winner = false;

  const boardFields = Array.from(document.getElementsByClassName('field'));

  UIctrl.showStats(players);

  //NEW GAME
  const newGame = ()=>{
    UIctrl.newGame(boardFields);
    setEventListeners();
    winner = false;
    turnsPLayed = 0;
  }

  //RESET
  const reset = ()=>{
    UIctrl.newGame(boardFields);
    setEventListeners();
    player1.wins = 0;
    player2.wins = 0;
    player1.isPlaying = true;
    player2.isPlaying = false;
    winner = false;
    turnsPLayed = 0;
    UIctrl.showStats(players);
  }


  const playTurn = function(event){
    let currPlayer = player1.isPlaying ? 'player1' : 'player2';

    turnsPLayed+=1;
        
    //UPDATE FIELD
    UIctrl.fieldClicked(event, currPlayer);
    event.target.removeEventListener('click', playTurn);

    checkWinner(currPlayer);

    //TOGGLE PLAYER
    player1.isPlaying = !player1.isPlaying;
    player2.isPlaying = !player2.isPlaying;    
  }
  
  //check winner
  const checkWinner = (currPlayer)=>{
    const table = Array.from(document.getElementsByClassName('field'))
    const tableValues = table.map(el=>parseInt(el.getAttribute('data-value')));
    const winCondition = currPlayer === 'player1' ? 45 : 90;
    const sums = [];

    const checkWhoWon = (sums)=>{
      if(sums.includes(winCondition)){
        if(winCondition == 45){
          player1.wins++;
          winner = true;
          UIctrl.alertWinner(winner, player1.name);
        } else{
          player2.wins++;
          winner = true;
          UIctrl.alertWinner(winner, player2.name);
        }
        console.log(`${currPlayer} is the winner`);
        removeListeners();
        UIctrl.showStats(players);
      } else if(turnsPLayed == 9 && !winner){
        UIctrl.alertWinner(winner);
      }
    } 
      
    //CHECK ROWS  
      for(i=0; i<=6; i+=3){
        let curSum = 0;
        let rowLimit = i+2;
        for(j=i; j<=rowLimit; j++){
          curValue = tableValues[j]
          curSum += curValue;
        }
        sums.push(curSum);
      }

    //CHECK COLUMNS
      for(i=0; i<=2; i++){
        let curSum = 0;
        let colLimit = i+6;
        for(j=i; j<=colLimit; j+=3){
          curValue = tableValues[j]
          curSum += curValue
        }
        sums.push(curSum);
      }
  
    // CHECK ACCROSS  
      let sumAcross1 = tableValues[0]+tableValues[4]+tableValues[8];
      let sumAcross2 = tableValues[2]+tableValues[4]+tableValues[6];
      sums.push(sumAcross1, sumAcross2);

      checkWhoWon(sums);
  }

  setEventListeners();

  // ADD LISTENERS
  function setEventListeners(){
    boardFields.forEach(field=>{
      field.addEventListener('click', playTurn);
    })
    document.getElementById('reset').addEventListener('click', reset);
    document.getElementById('new-game').addEventListener('click', newGame)
  };  

  //SETTINGS LISTENERS
  document.getElementById('settings').addEventListener('click',()=>{
    const settingsMenu = document.getElementById('settings-menu');
    if (settingsMenu.style.display === 'none'){
      settingsMenu.style.display = 'flex';
      settingsMenu.classList.toggle('settings-open')
    } else {
      settingsMenu.style.display = 'none';
      settingsMenu.classList.toggle('settings-open')
    }
  });

  const submit = document.getElementById('submit');
  submit.addEventListener('click', ()=>{
    const inputPlayer1 = document.getElementById('input-player1').value;
    const inputPlayer2 = document.getElementById('input-player2').value;
    player1.name = inputPlayer1;
    player2.name = inputPlayer2;
    UIctrl.showStats(players);
    reset();
  })

  // REMOVE LISTENERS FROM FIELDS
  function removeListeners(){
    boardFields.forEach(field=>{
      field.removeEventListener('click', playTurn);
    });
  }

return{
  player1, player2
}

})(UIcontroller);

