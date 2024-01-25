let palindrome = "able was i saw elba";

function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}

console.log(palindrome);
console.log(isPalindrome(palindrome));
