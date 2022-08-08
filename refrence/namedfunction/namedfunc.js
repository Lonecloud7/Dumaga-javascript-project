
let button1 = document.getElementById("button1");

let body = document.getElementById("body");

let output = document.getElementById("output")

button1.addEventlistener("click", clickme);


//not responding
function clickme(){

    body.style.backgroundColor="grey";
    output.style.innerHTML="it works";
    output.style.color="white";

}

