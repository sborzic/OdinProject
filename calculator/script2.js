let numbers = Array.from(document.getElementsByClassName('numbers'));
let operators = Array.from(document.getElementsByClassName('operator'))
let equals = document.querySelector('#equals');
let clear = document.querySelector('#clear');
let input='';
let displayedValue='';
let storedInput=[];

numbers.forEach(number=>{
  number.addEventListener('click', function() {
    input+=number.textContent;
    displayedValue+=number.textContent;
    toggleOperators(number);
    displaySelected(displayedValue);;
  })
});

operators.forEach(operator => {

  operator.addEventListener('click', function() {
    storedInput.push(input);
    input=operator.textContent;
    console.log(input);
    storedInput.push(input);
    displayedValue+=operator.textContent;
    toggleOperators(operator);
    input='';
    displaySelected(displayedValue);
  })   
});

equals.addEventListener('click', calculate);

function calculate(){
  if (input != ''){
    storedInput.push(input)
  };

  //solve multiplication and division
  for(let i=0; i<storedInput.length; i++){
    let before = parseInt(storedInput[i-1]);
    let after = parseInt(storedInput[i+1]);

    if(storedInput[i]=='*'){
      newValue = before*after;
      storedInput.splice(i-1, 3, newValue)
      i=0; //restarts the loop because length and iterating position has changed
    }else if(storedInput[i]=='/'){
      newValue = before/after;
      storedInput.splice(i-1, 3, newValue)
      i=0; //restarts the loop because length and iterating position has changed
    }
  }

  //solve subtract and add
  for(let i=0; i<storedInput.length; i++){
    let before = parseInt(storedInput[i-1]);
    let after = parseInt(storedInput[i+1]);

    if(storedInput[i]=='+'){
      newValue = before+after;
      storedInput.splice(i-1, 3, newValue)
      i=0; //restarts the loop because length and iterating position has changed
    }else if(storedInput[i]=='-'){
      newValue = before-after;
      storedInput.splice(i-1, 3, newValue)
      i=0; //restarts the loop because length and iterating position has changed
    }
  }
  displaySelected(storedInput[0]);
}

clear.addEventListener('click', reset);



function displaySelected(value){
  let display = document.getElementById('display');
  display.textContent = value;
}

function toggleOperators(button){
  let comma = Array.from(document.querySelector('#comma'));
  let joinedButtons = comma.concat(operators); //joined comma and operators for iterating and disabling
  let buttonList = ['+','-','*','/','.'];

  if (buttonList.includes(button.textContent)){
  joinedButtons.forEach(el => el.disabled=true)
  }else{
    joinedButtons.forEach(el => el.disabled=false)
  }
}

function reset(){
  input='';
  displayedValue='';
  storedInput=[];
  displaySelected(''); //clear display
}