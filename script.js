// let machineActive = true;
// let score=Number(prompt('what was your score'));
// let response;

// function checkMachine() {
//   if (machineActive){
//     checkScore();
//     console.log(`${response}`)
//   }
//   else {
//     console.log(`${response}`)
//   }
// }

// function checkScore() {
//   switch (true) {
//     case (score<0 || score>100):   
//       response='not possible, an error occured';
//       break;
  
//     case (score<20):
//       response='that was a terrible score-total fail';
//       break;
  
//     default:
//       break;
//   }
// }

// function checkScore() {
//    if (score<0 || score>100){
//     response='not possible, an error occured'
//   }
//    else if (score<20){
//     response='that was a terrible score-total fail'
//   }
//    else if (score<40){
//     response='you know some things, but its pretty bad score. needs improvement'
//   }
//    else if (score<70){
//     response='you did a passable job'
//   }
//    else if (score<90){
//     response='that\'s a great score, you really know your stuff'
//   }
//    else if (score<=100){
//     response='what an amazing score! did you cheat? are you for real'
//   }
//    else {
//     response='not possible, an error occured'
//   }
// }
//////////////////////////////////////////////////////
// let machineActive = true;
// let pwd = 'cheese';
// let machineResult;
// let pwdResult;

// if (machineActive) {
//   machineResult = 'Machine is ON';
//   console.log(machineResult);
  
//   (pwd == 'cheese') ? pwdResult = 'you\'ve logged in successfully' : pwdResult = 'wrong password'

//   console.log(pwdResult);
// }
////////////////////////////////////////////////////////

// let answer = prompt('What is the official name od JavaScript?');

// if (answer == 'ECMAScript') {
//   console.log('correct');
// }
// else {
//   console.log('you don\'t know? ECMAScript');
// }

//////////////////////////////////////////////////

// let answer = Number(prompt('enter number'));

// if (answer > 0) {
//   alert('1');
// }
// else if(answer < 0) {
//   alert('-1');
// }
// else {
//   alert('0');
// }

////////////////////////////////////////////////

// let message;
// let login = prompt('enter password');

// login == 'Employee' ? message = 'Hello' :
//   login == 'Director'? message = 'Greetings':
//   login == '' ? message = ' No login' : message = '';

// console.log(message);

/////////////////////////////////////////////

// let x = 1;

//     function a() {
//       let y = 2;
//       output(z);
//     }

//     function b() {
//       let z = 3;
//       output(y);
//     }

//     function output(value) {
//       const para = document.createElement('p');
//       document.body.appendChild(para);
//       para.textContent = 'Value: ' + value;
//     }

/////////////////////////////////////////////
///// exercise 1 https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions

// let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
// let para = document.createElement('p');

// Add your code here

// function rndName () {
//   let rndNum = Math.floor((Math.random()*names.length))
//   console.log(rndNum);
//   para.textContent = names[rndNum];
// }

// Don't edit the code below here!

// const section = document.querySelector('section');

// section.appendChild(para);

///////////////////////////////////////////////
/////// exercise 2 https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions

// let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
// let para = document.createElement('p');

// Add your code here

// function random(start,end) {
//   let range = end - start;
//   return rndNum = Math.floor((Math.random()*range)+start);
// }

// function rndName (start, end) {
//   random(start,end)
//   console.log(rndNum);
//   para.textContent = names[rndNum];
// }

// // Don't edit the code below here!

// const section = document.querySelector('section');

// section.appendChild(para);

////////////////////////////////////////////////////////////
////////https://javascript.info/function-basics last exercise

// calcPower();

// function calcPower(){
//   let x = Number(prompt('enter number'))
//   let y = Number(prompt('enter power'));
//   alert('result is ' + pow(x,y));

// }

// function pow(x,n) {
//   let result=1;
//   for(i=1; i<=n; i++) {
//     result=result*x;
//   }
//   return result;
// }
/////////////////////////////////////////////////////////////
///https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
// for (i=10; i>=0; i--) {
//   countDown(i);
// }

// function countDown (number){
//   const para = document.createElement('p');
//   para.textContent = number;
//   output.appendChild(para);
// }

// let i = 0;
// do {
//   if (people[i] == 'Phil' || people[i] == 'Lola') {
//     refused.textContent += people[i] + ', ';
//   }
//   else {
//    admitted.textContent += people[i] + ', ';
//   }
//   i++;
// }
// while (i<people.length);

// refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
// admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';

/////////////////////////////////////////////////
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops

// let list = document.querySelector('ul');
// let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];

// myArray.forEach(function(item){
//   let li = document.createElement('li');
//   li.textContent = item;
//   list.appendChild(li);
//   }
// )

// let phonebook = [
//   { name : 'Chris', number : '1549' },
//   { name : 'Li Kang', number : '9634' },
//   { name : 'Anne', number : '9065' },
//   { name : 'Francesca', number : '3001' },
//   { name : 'Mustafa', number : '6888' },
//   { name : 'Tina', number : '4312' },
//   { name : 'Bert', number : '7780' },
//   { name : 'Jada', number : '2282' },
// ]
// let name = prompt('Please enter the name you are searching for');
// let para = document.createElement('p');

// for (i=0; i<phonebook.length; i++) {
//   let currentItem = phonebook[i];
//   if (name == currentItem.name) {
//     para.textContent = `${currentItem.name} - tel.: ${currentItem.number}`
//     break;
//   } else {
//     para.textContent = 'Name not found';
//   }
// }
// document.body.appendChild(para);

// function isPrime(number){
//   if (number%2 == 0){
//   return false;
//   } else {
//     return true};
// }

// i = 500;
// while(i>0) {
//   if (isPrime(i)) {
//     let para = document.createElement('p');
//     para.textContent = i;
//     document.body.appendChild(para);
//   }
//   i--;
// }
///////////////////////////////////////
//https://javascript.info/while-for#tasks
// inuput number greater than 100

// let num = prompt('Enter number greater than 100');
// while(num<101){
//   num = prompt('Enter number greater than 100')
// }
////////////////////////////////////////
//https://www.theodinproject.com/lessons/dom-manipulation

// let para = document.createElement('p');
// document.body.appendChild(para);
// para.textContent = 'i\'m red';
// para.style.color = 'red';

// let head = document.createElement('h3');
// document.body.appendChild(head);
// head.textContent = 'i\'m blue'
// head.style.color = 'blue';

// let container = document.createElement('div');
// document.body.appendChild(container);
// container.style.border = '1px solid black';
// container.style.background = 'pink';

// let headOne = document.createElement('h1');
// headOne.textContent = 'i\'m blue';
// container.appendChild(headOne);
// let para2 = document.createElement('p')
// para2.textContent = 'me too';
// container.appendChild(para2);
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(e){
  console.log(e.target.style.background = 'blue');
});