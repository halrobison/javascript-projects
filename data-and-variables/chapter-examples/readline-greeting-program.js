// Using console.log with input

const input = require('readline-sync'); 

let firstName = input.question("First name: ");
let lastName = input.question("Last name: "); 

console.log("Last, First: " + lastName + ", " + firstName);