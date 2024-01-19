// console.log("Some Programming Languages:");

// console.log("\tPython\n\tJavaScript\n\tJava\n\tC#\n\tSwift");

// console.log("Bruce's beard"); 
// console.log(typeof "3.2");
// console.log(typeof 'c');

// console.log(Coding Rocks) // error
// console.log(Coding Rocks); // error
// console.log('Coding Rocks') // success
// console.log("Coding Rocks'); // error
// console.log("Coding Rocks"); // success

// Using console.log with input

const input = require('readline-sync'); 

let firstName = input.question("First name: ");
let lastName = input.question("Last name: "); 

console.log("Last, First: " + lastName + ",", + firstName);

// Converting input strings to numbers
//const input = require('readline-sync');

//let num1 = Number(input.question("Enter a number: "));
//let num2 = Number(input.question("Enter another number: "));

//console.log((num1) + (num2));

// Checking understanding: 

const input = require('readline-sync');

let info = input.question("Please enter your age: ");
//The user enters 25.

console.log(typeof info);