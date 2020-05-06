window.addEventListener('keydown', keyPressed);
window.addEventListener('keyup', keyReleased)

function keyReleased(e){
  let code = e.keyCode;
  toggleStyle(code);
}

function keyPressed(e) {
  let code = e.keyCode;
  console.log(e);
  playSound(code);
  toggleStyle(code);
}

function playSound(code) {
 let sound = document.getElementById(code);
 sound.play();
}

function toggleStyle(code){
  let key = document.getElementById(`key-${code}`);
  key.classList.toggle('pressed');
}