// 1. Arrow Functions

// ES5
function add(x, y) {
  return x + y;
}

// ES6
const add = (x, y) => x + y;

// -----------------------------------------------------------------
// 2. Template Literal
  // ES5
var name = "World";
var greeting = "Hello, " + name + "!";

// ES6
let name = "World";
let greeting = `Hello, ${name}!`;
// -----------------------------------------------------------------

// 3. Array & Object destructuring
// ES5
var person = { name: "John", age: 30 };
var name = person.name;
var age = person.age;

// ES6
const person = { name: "John", age: 30 };
const { name, age } = person;
// -----------------------------------------------------------------

// 4. Rest & spread operator

// Spread is used to split the array into individual elements
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Rest is used to combine
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const sum = (...numbers) =>{
  let total_sum = numbers.reduce((addition, num) => addition + num, 0)
  return total_sum
}

const result = sum(1, 2, 3, 4, 5); // Output: 15
console.log(result)
// -----------------------------------------------------------------

// 5. let & const declarations
// ES5
var a = 1;

// ES6
let b = 2;
const c = 3;
// -----------------------------------------------------------------

// 6. classes - Provides a more convenient syntax for creating constructor functions and prototypes.

// ES5
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// ES6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// -----------------------------------------------------------------

// 7. Modules - Introduces a modular system for organizing code. also Supports import and export statements.
// ES5
var math = require("math");

// ES6
import math from "math";
// -----------------------------------------------------------------

// 8. Promises

// ES5 (Callback)

function callback(message) =>{
    console.log(message)
}
function fetchData(callback) {
  // Asynchronous operation
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData(callback);


// ES6 (Promise)
function fetchData() {
  return new Promise((resolve) => {
    // Asynchronous operation
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

fetchData
  .then((data)=>console.log(data))
  .catch((error)=>console.log(error))
