let display1 = document.getElementById("display1");

let button1 = document.getElementById("button1");

button1.addEventListener("dblclick", function(){

    display1.style.display="none"
})

button1.addEventListener("click", getname1)

function getname1(){

    const xhr1 = new XMLHttpRequest();

    xhr1.open("GET","books/mistborn.txt", true);

    xhr1.onload = function(){

        if(this.status == 200){

            console.log(this.responseText);

            display1.innerHTML = `${this.responseText}`

            display1.style.display="block";

            display2.style.display="none";

            display3.style.display="none";

            display4.style.display="none";

            display5.style.display="none";

            display6.style.display="none";
        }
    }


    xhr1.send()

    
}

let display2 = document.getElementById("display2");

let button2 = document.getElementById("button2");

button2.addEventListener("click", getname2)

function getname2(){

    const xhr2 = new XMLHttpRequest();

    xhr2.open("GET","books/stormlight.txt", true);

    xhr2.onload = function(){

        if(this.status == 200){

            console.log(this.responseText);

            display2.innerHTML = `${this.responseText}`

            display1.style.display="none";

            display2.style.display="block";

            display3.style.display="none";

            display4.style.display="none";

            display5.style.display="none";

            display6.style.display="none";
        }
    }


    xhr2.send()

    
}

let display3 = document.getElementById("display3");

let button3 = document.getElementById("button3");

button3.addEventListener("click", getname3)

function getname3(){

    const xhr3 = new XMLHttpRequest();

    xhr3.open("GET","books/powdermage.txt", true);

    xhr3.onload = function(){

        if(this.status == 200){

            console.log(this.responseText);

            display3.innerHTML = `${this.responseText}`

            display1.style.display="none";

            display2.style.display="none";

            display3.style.display="block";

            display4.style.display="none";

            display5.style.display="none";

            display6.style.display="none";
        }
    }


    xhr3.send()

    
}





let display4 = document.getElementById("display4");

let button4 = document.getElementById("button4");

button4.addEventListener("click", getname4)

function getname4(){

    const xhr4 = new XMLHttpRequest();

    xhr4.open("GET","books/firstlaw.txt", true);

    xhr4.onload = function(){

        if(this.status == 200){

            console.log(this.responseText);

            display4.innerHTML = `${this.responseText}`

            display1.style.display="none";

            display2.style.display="none";

            display3.style.display="none";

            display4.style.display="block";

            display5.style.display="none";

            display6.style.display="none";
        }
    }


    xhr4.send()

    
}


let display5 = document.getElementById("display5");

let button5 = document.getElementById("button5");

button5.addEventListener("click", getname5)

function getname5(){

    const xhr5 = new XMLHttpRequest();

    xhr5.open("GET","books/lightbringer.txt", true);

    xhr5.onload = function(){

        if(this.status == 200){

            console.log(this.responseText);

            display5.innerHTML = `${this.responseText}`

            display1.style.display="none";

            display2.style.display="none";

            display3.style.display="none";

            display4.style.display="none";

            display5.style.display="block";

            display6.style.display="none";
        }
    }


    xhr5.send()

    
}


let display6 = document.getElementById("display6");

let button6 = document.getElementById("button6");

button6.addEventListener("click", getname6)

function getname6(){

    const xhr6 = new XMLHttpRequest();

    xhr6.open("GET","books/kingkiller.txt", true);

    xhr6.onload = function(){

        if(this.status == 200){

            console.log(this.responseText);

            display6.innerHTML = `${this.responseText}`

            display1.style.display="none";

            display2.style.display="none";

            display3.style.display="none";

            display4.style.display="none";

            display5.style.display="none";

            display6.style.display="block";
        }
    }


    xhr6.send()

    
}