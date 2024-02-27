// Write your JavaScript code here.
// Remember to pay attention to page loading! 
function init () {
    
const takeoff = document.getElementById("takeoff"); 
const flightStatus = document.getElementById("flightStatus");
const shuttleBackground = document.getElementById("shuttleBackground"); 
const shuttleHeight = document.getElementById("spaceShuttleHeight"); 
const land = document.getElementById("landing"); 
const abort = document.getElementById("missionAbort");

const rocket = document.getElementById("rocket");
const up = document.getElementById("up"); 
const down = document.getElementById("down"); 
const right = document.getElementById("right"); 
const left = document.getElementById("left"); 

// could change by percentage if you want it to be accurately centered, would need to change all px changes to percentages
rocket.style.right = '0px'
rocket.style.left = '340px'
rocket.style.top = '250px'
rocket.style.bottom = '0px'

// takeoff button
    takeoff.addEventListener("click", function (event) {
        if(window.confirm("Confirm that the shuttle is ready for takeoff:")) {
            flightStatus.textContent = ('Shuttle in flight')
            shuttleBackground.style.backgroundColor = "blue"
            shuttleHeight.innerHTML = 10000
        }
    })

// land button
    land.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.textContent = ("The shuttle has landed.")
        shuttleBackground.style.backgroundColor = "green"
        shuttleHeight.innerHTML = 0
    })

// abort mission button 
    abort.addEventListener("click", function () {
        if(window.confirm("Confirm that you want to abort the mission:")) {
            flightStatus.textContent = ("Mission aborted.")
            shuttleBackground.style.backgroundColor = "green"
            shuttleHeight.innerHTML = 0
        }
    })

// control direction buttons
    up.addEventListener('click', function () {
        rocket.style.top = (parseInt(rocket.style.top) - 10) + 'px'
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000
    })

    down.addEventListener('click', function () {
        rocket.style.top = (parseInt(rocket.style.top) + 10) + 'px'
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000
    })

    left.addEventListener('click', function () {
        let currentPosition = rocket.offsetLeft;
        rocket.style.left = (currentPosition - 10) + 'px';
    })

    right.addEventListener('click', function() {
        rocket.style.left = (parseInt(rocket.style.left) + 10) + 'px'
    })
}

window.addEventListener("load", init)
