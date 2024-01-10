// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

// Assign variables
let fuelReady = false;
let crewAndComputerReady = false;
let fuelLevel = 20000;
let crewStatus = true;
let computerStatus = 'green';

// Check fuel level
if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelReady = false;
}

console.log("fuelReady = ", fuelReady);

// Check crew and computer status
if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewAndComputerReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   crewAndComputerReady = false;
}

console.log("crewAndComputerReady = ", crewAndComputerReady);

// Final check before liftoff!
if (fuelReady === true && crewAndComputerReady == true) {
   console.log("All systems ready. Countdown starting..."); 
   console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1.")
   console.log("Liftoff!"); 
} else {
   console.log("Launch scrubbed.")
}