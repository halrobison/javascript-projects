//function using accumulator pattern to reverse a string
let testString = "Excalibur";

function reverseAccumulator(str) {
   let reversed = '';

   for (let i = 0; i < str.length; i++) {
       reversed = str[i] + reversed;
   }

   return reversed;
}

//function using methods to reverse a string
function reverseMethod(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}

//function method reduced to one line with chaining
function chainedMethod(str) {
   return str.split('').reverse().join('');
}

console.log(chainedMethod(testString));
