/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

// Print numbers 0 - 20, one number per line. 
// for (let i = 0; i < 21; i++) {
//   console.log(i);
// }

//Print only the odd values from 3 - 29, one number per line. 
// for (let i = 3; i < 30; i = i + 2) {
//   console.log(i);
// }

//Print the even numbers 12 to -14 in descending order, one number per line. 
// for (let i = 12; i > -15; i = i - 2) {
//   console.log(i); 
// }

//Challenge: Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of three.
// for (let i = 50; i > 19; i--) {
//   if ((i % 3) === 0) {
//     console.log(i)
//   }
// }

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].*/
let str = "LaunchCode"; 
let array = [1, 5, 'LC101', 'blue', 42]

/* Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

//Print each element of the array to a new line.
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

//Print each character of the string - in reverse order - to a new line.
// for (let i = str.length - 1; i > -1; i--) {
//   console.log(str[i]);
// }

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
let unsortedArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evensArray = [];
let oddsArray = [];

let evenCounter = 0; 
let oddCounter = 0; 

for (let i = 0; i < unsortedArray.length; i++) {
  if ((unsortedArray[i] % 2) === 0) {
    evensArray[evenCounter] = unsortedArray[i]; 
    evenCounter++;
  } else {
    oddsArray[oddCounter] = unsortedArray[i];
    oddCounter++;
  }
} 

console.log(`Evens Array: ${evensArray}`);
console.log(`Odds Array: ${oddsArray}`); 
