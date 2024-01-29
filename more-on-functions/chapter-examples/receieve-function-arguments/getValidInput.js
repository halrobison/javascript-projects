const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let isA = function(n) {
  if (n[0] === "a" || n === "A") {
    return true; 
  }
  return false; 
}

console.log(getValidInput("Say a word that starts with A: ", isA))

// TODO 2: write a validator 
// that ensures input is a vowel
let isVowel = function(n) {
  if (n == "a" || n == "e" || n == "i" || n == "o" || n == "u") {
    return true;
  }
  return false;
}

console.log(getValidInput("Say a vowel: ", isVowel))

// Be sure to test your code!
