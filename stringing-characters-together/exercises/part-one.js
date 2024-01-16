let num = 1000000000.1;

//Returns 'undefined'.
//console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
// num = String(num); 
// console.log("Total length = " + num.length); 

// //Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
// let numDecimalValue = num.replace(".", ""); 
// console.log("Total number of digits = " + numDecimalValue.length);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if ((String(num).includes(".")) === true) {
    let numIfDecimal = (String(num).replace(".", "")); 
    console.log(String(numIfDecimal).length); 
} else {
    console.log(String(num).length);
}