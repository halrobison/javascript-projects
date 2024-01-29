//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
let practiceSkills = function(array) {
    if (typeof array === "number") {
        return array * 3;
    } else if (typeof array === "string") {
        return "ARRR!"; 
    } else {
        return array;
    }
 }

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/
let string1 = ["string", "yarn"];
let test = ["Elocution", 21, "clean teeth", 100];

let changed = test.map(practiceSkills)

console.log(changed);