let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
// console.log(str.split()); 
// console.log(str.split("e")); 
// console.log(str.split(" "));
// console.log(str.split("")); 
// // The element in parenthesis determines how the new strings will be separated.
// // line 5 splits nothing, line 6 removes and splits on e's, line 7 splits on spaces, and line 8 splits every character of the original string.

// //2) Use the join method on the array to identify the purpose of the parameter inside the ().
// console.log(arr.join()); 
// console.log(arr.join('a')); 
// console.log(arr.join(" ")); 
// console.log(arr.join("")); 
// // join creates a string from the list, so the element inside the () indicates how the elements will be separated.

// //3) Do split or join change the original string/array?
// arr.join('a'); 
// console.log(arr); 
// // original array is not modified
// str.split('e'); 
// console.log(str); 
// // original string is not modified

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let newArray = cargoHold.split(','); 
newArray.sort(); 
console.log(newArray.join(",")); 

//4b) Here's a solution from the textbook that uses method chaining.
//console.log(cargoHold.split(',').sort().join(','));
