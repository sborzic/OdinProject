let numbers = Array.from(document.getElementsByClassName('numbers'));
let operators = Array.from(document.getElementsByClassName('operator'))
let equals = document.querySelector('.equals');
let input='';
let displayedValue='';
let storedInput=[];

numbers.forEach(number=>{
  number.addEventListener('click', function() {
    input+=number.textContent;
    console.log(input);
    displayedValue+=number.textContent;
    toggleOperators(number);
    displaySelected();
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
    displaySelected()
  })   
});

equals.addEventListener('click', calculate());


function calculate(){
  storedInput.push(input);

  //solve multiplication and division
  for(let i=0; i<storedInput.length; i++){
    let before = parseInt(storedInput[i-1]);
    let after = parseInt(storedInput[i+1]);

    if(storedInput[i]=='*'){
      newValue = before*after;
      storedInput.splice(before, 3, newValue)
    }else if(storedInput[i]=='/'){
      newValue = before/after;
      storedInput.splice(before, 3, newValue)
    }
  }

  //solve subtract and add
  for(let i=0; i<storedInput.length; i++){
    let before = parseInt(storedInput[i-1]);
    let after = parseInt(storedInput[i+1]);

    if(storedInput[i]=='+'){
      newValue = before+after;
      storedInput.splice(before, 3, newValue)
    }else if(storedInput[i]=='-'){
      newValue = before-after;
      storedInput.splice(before, 3, newValue)
    }
  }
}



function displaySelected(value){
  let display = document.getElementById('display');
  display.textContent = displayedValue;
}

function toggleOperators(button){
  let comma = Array.from(document.getElementsByClassName('comma'));
  let joinedButtons = comma.concat(operators); //joined comma and operators for iterating and disabling
  let buttonList = ['+','-','*','/','.'];

  if (buttonList.includes(button.textContent)){
  joinedButtons.forEach(el => el.disabled=true)
  }else{
    joinedButtons.forEach(el => el.disabled=false)
  }
}