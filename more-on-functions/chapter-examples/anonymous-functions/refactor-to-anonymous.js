// function reverse(str) {
  // let lettersArray = str.split('');
  // let reversedLettersArray = lettersArray.reverse();
  // return reversedLettersArray.join('');
// }

let reverse = function(str) {
  return str.split('').reverse().join('');
}

console.log(reverse("LaunchCode"));
