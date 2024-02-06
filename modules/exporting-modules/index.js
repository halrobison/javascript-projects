const practice = require('./practiceExports.js');
let arr = ['Hello', 'World', 123];

console.log(practice.isPalindrome("mom"));
console.log(practice.evenOrOdd('3'));

for (i = 0; i < 3; i++) {
    console.log(practice.randomArrayElement(arr));
}