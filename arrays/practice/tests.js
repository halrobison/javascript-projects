// updating items within an array
let javaScriptFrameworks = ["React", "Angular", "Ember"];
console.log(javaScriptFrameworks);

// Set the value of index 2 to be "Vue"
javaScriptFrameworks[2] = "Vue";

// Notice the value at index 2 is now "Vue"
console.log(javaScriptFrameworks);

// sorts list - but by assessing first character of each item
let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

// creates array, looking for spaces and creating new items after each one
let str = "Launchcode students rock!"
let array = str.split(" "); 
console.log(array);

// grabs items 2, 3, 4 in list and alphabatizes
let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);

// using a 2D array
let shuttleCrews = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

console.log(shuttleCrews[0][2]);
console.log(shuttleCrews[1][1]);
console.log(shuttleCrews[2][1]);

// using array methods on a 2D array
let shuttleCrewsMethods = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// Add a new crew array to the end of shuttleCrewsMethods
shuttleCrewsMethods.push(newCrew);
console.log(shuttleCrewsMethods[3][2]);

// Reverse the order of the crew at index 1
shuttleCrewsMethods[1].reverse();
console.log(shuttleCrewsMethods[1]);

// Practice exercise
const school = [
    ["science", "computer", "art"], 
    ["Jones", "Willoughby", "Rhodes"]
];
console.log(school[1][0])
school[0].push("dance"); 
school[1].unshift("Holmes"); 
console.log(school)