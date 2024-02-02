// Code your orbitCircumference function here:
let altitude = 2000 
function orbitCircumference(altitude){
  return Math.round(2*(Math.PI)*(altitude));
}

//console.log(orbitCircumference(altitude));

// Code your missionDuration function here:
function missionDuration(orbitsCompleted, orbitRadius = 2000, orbitalSpeed = 28000){
  return Number((orbitsCompleted*orbitCircumference(orbitRadius) / orbitalSpeed).toFixed(2))
}

console.log(`The mission will travel ${orbitCircumference(altitude)} km around the planet, and it will take ${missionDuration(5, 2000, 28000)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(array){
  let index = Math.floor(Math.random()*array.length);
  return array[index]
}

// Code your oxygenExpended function here:
function oxygenExpended(animal){
  let hours = missionDuration(3);
  let oxygenLevel = Number((animal.o2Used(hours)).toFixed(3));
  return `${animal.name} will perform the spacewalk, which will last ${hours} hours and require ${oxygenLevel} kg of oxygen.`
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];
 
 console.log(oxygenExpended(selectRandomEntry(crew)))
