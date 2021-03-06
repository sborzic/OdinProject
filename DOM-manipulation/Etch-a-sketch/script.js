let mainContainer = document.getElementById('main');

let startGame = document.getElementById('start');
startGame.addEventListener('click', createGrid);

let reset = document.getElementById('reset');
reset.addEventListener('click', resetGame)


let colorSliders = Array.from(document.getElementsByClassName('color-slider'));
colorSliders.forEach(changeColors);

let squareColor = 'black'

function changeColors(slider){
  slider.addEventListener('input', function(){
    let red = Number(document.getElementById('red').value);
    document.getElementById('red-value').textContent = red;

    let green = Number(document.getElementById('green').value);
    document.getElementById('green-value').textContent = green;

    let blue = Number(document.getElementById('blue').value);
    document.getElementById('blue-value').textContent = blue;

    squareColor = `rgb(${red}, ${green}, ${blue})`;
    addMouseOver();
  })
}

function createGrid(){
  resetGame();
  document.body.appendChild(mainContainer);
  let height = Number(document.getElementById('rows').value);
  let length = Number(document.getElementById('columns').value);

  if(height<1 || length < 1) {
    alert('Please enter the desired number of rows and columns')
  } else {
    generateSquares(height, length)
    addGrid(height, length); 
    addMouseOver();
  }
}

function generateSquares(height, length){
  let numOfSquares = height * length;
  // calculate square dimensions for whole screen
  // let sqHeight = window.innerHeight/height + 'px';
  // let sqWidth = window.innerWidth/length + 'px';

  //calculate square dimensions based on mainContainer div
  let sqHeight = 500/height + 'px';
  let sqWidth = 1000/length + 'px';


  for(i=0; i<numOfSquares; i++){
    let square = document.createElement('div');
    square.style.height = sqHeight;
    square.style.width = sqWidth;
    square.style.boxSizing = 'border-box';
    square.classList.add('square');
    // square.style.border = `1px solid black`;
    mainContainer.appendChild(square);
  }  
}

function addGrid(height, length){
  mainContainer.style.display = 'grid';
  mainContainer.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
  mainContainer.style.gridTemplateRows = `repeat(${height}, 1fr)`;
}

function addMouseOver(){
  let squares = Array.from(document.getElementsByClassName('square'));
  for(let i = 0; i<squares.length; i++) {
    squares[i].addEventListener('mouseover', function(e){
      // let background = e.target.attributes['class'].background;
      // console.log(background);
      squares[i].style.backgroundColor = squareColor;
    })
  }
}

function resetColors(){
  colorSliders.forEach(function(slider){
    slider.value = 0;
  })
  Array.from(document.getElementsByClassName('color-value')).forEach(function(color){
    color.textContent = 0;
  })
  squareColor = 'black';
}

function resetGame(){
  let square = mainContainer.lastElementChild;
  while(square) {
    mainContainer.removeChild(square);
    square = mainContainer.lastElementChild;
  }
  resetColors();
}