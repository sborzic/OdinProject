let numbers = Array.from(document.getElementsByClassName('numbers'));
let operators = Array.from(document.getElementsByClassName('operator'))
let input='';
let displayedValue='';
let storedInput=[];

numbers.forEach(number=>{
  number.addEventListener('click', function() {
    input+=number.textContent;
    displayedValue+=input;
    toggleOperators();
  })
});

operators.forEach(operator => {

  operator.addEventListener('click', function() {
    storedInput.push(input);
    input=operator.textContent;
    storedInput.push(input);
    displayedValue+=input;
    toggleOperators();
    input='';
  })
   
});

function toggleOperators(){
  let comma = Array.from(document.getElementsByClassName('comma'));
  let joinedButtons = comma.concat(operators); //joined comma and operators for iterating and disabling

  joinedButtons.forEach(el => {
    if(el.textContent != input){
      el.disabled = false;
    }else{
      el.disabled = true;
    }
  })
}


