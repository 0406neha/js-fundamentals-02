// console.log('hello');
// // alert('yooo');

// //variables
// var a = 'Banana';
// console.log(a);

// var anyNumber = 16;
// console.log(anyNumber);

// // var myName = prompt('What is your name?');

// // document.getElementById('paraGraph').innerHTML = myName;

// //Numbers in javascript
// var num1 = 10;
// // num1 = num1 + 1; //incrementing
// num1++; //incrementing

// num1--; //decrementing

// console.log(num1);

// /* Functions
// 1. Create a function
// 2. Call a function
// */

// // Create
// function fun() {
//   console.log('this is a function');
// }

// // Call
// fun();

// // Return Function

// function greeting(yourName) {
//   var result = 'Hello' + ' ' + yourName; //String Concatenation
//   console.log(result);
// }
// var aName = prompt('What is your name?');
// greeting(aName);

// // Function arguements

// function aNumber(num1, num2) {
//   var result = num1 + num2;
//   console.log(result);
// }

// // aNumber(15, 14);
// // aNumber('10', 10);
// aNumber('10', '10');

// function calc(a, b = 0) {
//   return 2 * (a + b);
// }

// const number = calc(2);
// console.log(number);

// function sum(x, y) {
//   let ret = x + y;
//   return ret;
// }

// const add = sum(4, 5);
// console.log(add);

// const calcAge3 = (birthYear) => 2024 - birthYear;
// const age3 = calcAge3(2004);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 60 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement}  years`;
// };
// console.log(yearsUntilRetirement(2004, 'Neha'));
// console.log(yearsUntilRetirement(2006, 'Isha'));
// console.log(yearsUntilRetirement(2000, 'Divya'));

// function cutSquarePieces(box) {
//   return box * 4;
// }

// function squareBox(first, second) {
//   const firstBox = cutSquarePieces(first);
//   const secondBox = cutSquarePieces(second);

//   const pieces = `First box should have ${firstBox} pieces and second box should have ${secondBox} pieces.`;
//   return pieces;
// }

// console.log(squareBox(2, 4));

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No one wins...');
  }
};

checkWinner(scoreDolphins, scoreKoalas);
