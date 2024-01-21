const { start } = require("repl");

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require("readline-sync");
let startingFuelLevel = 0; 
let numberOfAstronauts = 0; 
let shuttleAltitude = 0; 




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
startingFuelLevel = input.question("What is the starting fuel level? ")
startingFuelLevel = Number(startingFuelLevel); 

while (startingFuelLevel > 30000 || startingFuelLevel < 5000) {
  startingFuelLevel = input.question("Invalid input. Please enter a fuel level between 5000 and 30000. Reenter fuel level: ");
  startingFuelLevel = Number(startingFuelLevel);
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
numberOfAstronauts = input.question("How many astronauts are aboard? ")
numberOfAstronauts = Number(numberOfAstronauts); 

while (numberOfAstronauts > 7 || numberOfAstronauts < 0) {
  numberOfAstronauts = input.question("Invalid input. Please enter a number between 1-7. Reenter number: ");
  numberOfAstronauts = Number(numberOfAstronauts);
}
  

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuelLevel-100*numberOfAstronauts >= 0) {
  shuttleAltitude += 50;
  startingFuelLevel -= 100*numberOfAstronauts;
  }


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let output = `The shuttle gained an altitude of ${shuttleAltitude} km.`;

if (shuttleAltitude >= 2000) {
  output += " Orbit achieved!";
} else {
  output += " Failed to reach orbit."
}

console.log(output); 
