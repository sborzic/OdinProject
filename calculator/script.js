let numbers = Array.from(document.getElementsByClassName('button'));
let selectedValue;
let displayedValue='';


numbers.forEach(button => {
  button.addEventListener('click', function(){
    if(button.classList.contains('numbers')){
      selectedValue = Number(button.textContent);
      toggleOperators();
    }else{
      selectedValue = button.textContent; 
      toggleOperators();     
    }
    
    displaySelected(selectedValue);
  })
});

function displaySelected(value){
  displayedValue+=value;
  let display = document.getElementById('display');
  display.textContent = displayedValue;
}

function toggleOperators(){
  let operators = Array.from(document.getElementsByClassName('operator'));
  operators.forEach(operator => {
    if(typeof(selectedValue)=='number'){
      operator.disabled = false;
    }else {
      operator.disabled = true;
    }
  })
}