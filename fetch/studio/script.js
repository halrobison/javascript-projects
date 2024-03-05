//TODO: Add Your Code Below
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            const container = document.getElementById("container");
            // possible sort: const ordered = json.sort((a, b) => a.hoursInSpace > b.hoursInSpace)
            for (i=0; i < json.length; i++) {
                console.log(json);
                container.innerHTML += `
                    <div class="astronaut">
                        <div>
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                            <li>Hours in Space: ${json[i].hoursInSpace}</li>
                            <li class=${Boolean(json[i].active) ? 'active' : 'inactive'}>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}></img>
                    </div>
                `;
            }
        })
    })
})