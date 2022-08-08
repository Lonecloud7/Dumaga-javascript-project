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