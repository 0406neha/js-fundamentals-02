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

function calc(a, b = 0) {
  return 2 * (a + b);
}

const number = calc(2);
console.log(number);

function sum(x, y) {
  let ret = x + y;
  return ret;
}

const add = sum(4, 5);
console.log(add);
