const input = require("readline-sync"); 

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(",").sort(); 
equipment = equipment.split(",").sort(); 
pets = pets.split(",").sort(); 
sleepAids = sleepAids.split(',').sort(); 

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(food, equipment, pets, sleepAids); 
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
// let cabinetIndex = input.question("Select a cabinet (Between 0-3): ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
// if (cabinetIndex > 3 || cabinetIndex < 0) {
//     console.log("ERROR! Choose a cabinet between 0 - 3!");
// }
// console.log(`Cabinet ${cabinetIndex} contains ${cargoHold[cabinetIndex]}`); 

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let cabinetIndex = input.question("Select a cabinet (Between 0-3): ");
let itemInfo = input.question("Choose a cabinet item: ")

if (cabinetIndex > 3 || cabinetIndex < 0) {
    console.log("ERROR! Choose a cabinet between 0 - 3!");
}
if (cargoHold[cabinetIndex].includes(itemInfo)) {
    console.log(`Cabinet ${cabinetIndex} contains ${itemInfo}`);
} else {
    console.log(`ERROR! Cabinet ${cabinetIndex} does not contain ${itemInfo}.`);
}