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
