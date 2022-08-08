let tasks = document.getElementById("task");

let form = document.getElementById("myform");

let msg = document.getElementById("msg");

let output = document.getElementById("output");



let orderedlist = document.querySelector("li");

tasks.style.fontFamily="Baskerville Old Face";

tasks.style.fontSize="30px";



form.addEventListener("submit", function(e){
    e.preventDefault();

    if(tasks.value == ""){

        msg.innerHTML = "NO TASK FILLED IN!";
        // msg.style.color="black";
    }

    else if(tasks.value == tasks.value){

        const li = document.createElement("li");

        li.appendChild(document.createTextNode(tasks.value));

        output.appendChild(li);

        // output.appendChild("ol");

        li.style.color="white";

        li.style.fontSize="80px";

        li.style.listStyle="none";

        

tasks.value="";   

li.addEventListener("click", function(){
    li.style.textDecoration="line-through";
});

li.addEventListener("dblclick", function(){
    output.removeChild(li);
});




    }

})


// strike out tasks


