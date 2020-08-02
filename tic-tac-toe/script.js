const UIcontroller = (function(){
  //update field
  const fieldClicked = function(event){
    event.target.classList.toggle('clicked');
    // console.log('works')
  }

  return {
    fieldClicked 
  }
})();


const gameController = (function(UIctrl){
  let player1 = true;
  let player2 = false;

  const turnPlayed = function(event){
    //update field
    UIctrl.fieldClicked(event);

    //toggle player
    player1 = !player1;
    player2 = !player2;
    console.log(`player 1: ${player1}, player2: ${player2}`);
    
    //score tracker
  }
  
  // add listeners
  let fields = Array.from(document.getElementsByClassName('field'));
  fields.forEach(field=>{
    field.addEventListener('click', turnPlayed);
  });  

})(UIcontroller);

