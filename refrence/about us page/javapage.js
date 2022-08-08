




let user = document.getElementById("username");
let pass = document.getElementById("password");
let msg = document.getElementById("msg");
let email = document.getElementById("email");
let form = document.getElementById("myform").addEventListener("submit", function(e){

    e.preventDefault();

    const user1 = "dmg";

const pass1 = "dmg";

const email1 = 'dmg';

    if(user.value == "" && pass.value == "" && email.value == ""){
        msg.innerHTML="your username and password are required";
    }

    else if(user1 == user.value && pass1 == pass.value && email.value == email1){
        window.location.href="aboutus.html";
    }

    else if(user1 != user.value && pass1 != pass.value && email.value != email1){
        msg.innerHTML="Wrong login credentials!";
    }

    
});

