//login logic

let user1 = document.getElementById("user1");
let email1 = document.getElementById("email1");
let pass1 = document.getElementById("pass1");
    // user1.addEventListener("blur", hoverUser);
let subbtn1 = document.getElementById("subbtn1");
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let user2 = document.getElementById("user2");
let email2 = document.getElementById("email2");
let pass2 = document.getElementById("pass2");
let conpass = document.getElementById("conpass");
let signupform = document.getElementById("signupform");
let signinform = document.getElementById("signinform");
let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2");
let createacc1 = document.getElementById("createacc1")
let createacc2 = document.getElementById("createacc2")
let close1 = document.getElementById("close1");
let close2 = document.getElementById("close2");
let loginbtn = document.getElementById("loginbtn");
let loginbtn2 = document.getElementById("loginbtn2");
let userdisplay = document.getElementById("login1");
let displayRes = document.getElementById("output-result");


//  NAME DISPLAY IN SHOP
let shopbtn1 = document.getElementById("shopbtn1");

if(shopbtn1){
    shopbtn1.addEventListener("click", function(){

    //    let  nameElement = document.createElement("h3");

    //    let nameDisplay = document.createTextNode("Ebuka");

    //    let nameDis = nameElement.appendChild(nameDisplay);
        if(loginbtn2){
            loginbtn2.innerHTML = `<h3>Ebuka</h3>`
        }
        

    })
}
let closeR = document.getElementById("closeres")

if(closeR){
    closeR.addEventListener("click", function(){

        displayRes.style.display="none"

        closeR.style.display="none"
    })
}
let result1 = document.getElementById("result1")

if(result1){
    result1.addEventListener("click", resultCheck)
}

let result2 = document.getElementById("result2")

if(result2){
    result2.addEventListener("click", resultCheck2)
}

let result3 = document.getElementById("result3")

if(result3){
    result3.addEventListener("click", resultCheck3)
}
let form1 = document.getElementById("form1")
if(form1){
    form1.addEventListener("submit", logInUser);
}
let form2 = document.getElementById("form2")
if(form2){
    form2.addEventListener("submit", signUpUser);
}

//USERLOGINS

let username1 = "ebuka"
let  emailaddress1 = "ebuka@ebuka"
let  password1 = "ebuka"

    
let username2 = "john"
let emailaddress2 = "john@john"
let  password2 = "john"

   
let username3 = "mary"
let emailaddress3 = "mary@mary"
let password3 = "mary"

function logInUser(e){
 e.preventDefault();


 if(user1.value == "" && email1.value == "" && pass1.value == ""){

   msg1.innerHTML = "Fill in credentials"
}

 else if(user1.value == username1 && email1.value == emailaddress1 && pass1.value == password1){

   window.location.href = "/studentpage/project1login1.html";
}

else if(user1.value == username2 && email1.value == emailaddress2 && pass1.value == password2){

    window.location.href = "/studentpage/project1login2.html";
 }

 else if(user1.value == username3 && email1.value == emailaddress3 && pass1.value == password3){

    window.location.href = "/studentpage/project1login3.html";
 }


 else if(user1.value != username1 && email1.value != emailaddress1 && pass1.value != password1){

    msg1.innerHTML = "Wrong username or passsword"

 }

 else if(user1.value != username2 && email1.value != emailaddress2 && pass1.value != password2){

    msg1.innerHTML = "Wrong username or passsword"

 }

 else if(user1.value != username3 && email1.value != emailaddress3 && pass1.value != password3){

    msg1.innerHTML = "Wrong username or passsword"

 }


else if(user1.value == ""){
    msg1.innerHTML = "Fill in your username"
 }

 else if(email1.value == ""){
    msg1.innerHTML = "Fill in your email adrress"
 }

 else if(pass1.value  == ""){
    msg1.innerHTML = "Fill in your password"
 }
 
         //  user1.value = ""
         // email1.value = ""
         // pass1.value = ""
  
}

function signUpUser(e){

   e.preventDefault();


   if(user2.value == "" && email2.value == "" && pass2.value == "" && conpass.value == "" && name1.value == "" && name2.value == ""){

      msg2.innerHTML = "Fill in credentials"
   }

  else if(name1.value == name1.value && 
      name2.value == name2.value && user2.value == user2.value && 
      email2.value == email2.value && pass2.value == pass2.value && conpass.value == conpass.value){

         firstname =  name1.value;
         lastname = name2.value;
         username1 = user2.value;
         emailaddress1 = email2.value;
         password1 = pass2.value;

         signupform.style.display="none";

         signinform.style.display="block";

      }

   else if(conpass.value != pass2.value ){

      msg2.innerHTML = "Passwords do not match"
   }


      



}

//SHOP BUTTONS

let itembtn1 = document.querySelector(".itembtn1");

if(itembtn1){

    itembtn1.addEventListener("click", function(){

        itembtn1.innerHTML = `<button>SOLD</button>`
    })
}

let itembtn2 = document.querySelector(".itembtn2");

if(itembtn2){

    itembtn2.addEventListener("click", function(){

        itembtn2.innerHTML = `<button>SOLD</button>`
    })
}

let itembtn9 = document.querySelector(".itembtn9");

if(itembtn9){

    itembtn9.addEventListener("click", function(){

        itembtn9.innerHTML = `<button>SOLD</button>`
    })
}

let itembtn3 = document.querySelector(".itembtn3");

if(itembtn3){

    itembtn3.addEventListener("click", function(){

        itembtn3.innerHTML = `<button>SOLD</button>`
    })
}

let itembtn4 = document.querySelector(".itembtn4");

if(itembtn4){

    itembtn4.addEventListener("click", function(){

        itembtn4.innerHTML = `<button>SOLD</button>`
    })
}

let itembtn5 = document.querySelector(".itembtn5");

if(itembtn5){

    itembtn5.addEventListener("click", function(){

        itembtn5.innerHTML = `<button>SOLD</button>`
    })
}

let itembtn6 = document.querySelector(".itembtn6");

if(itembtn6){

    itembtn6.addEventListener("click", function(){

        itembtn6.innerHTML = `<button>SOLD</button>`
    })
}

let itembtn7 = document.querySelector(".itembtn7");

if(itembtn7){

    itembtn7.addEventListener("click", function(){

        itembtn7.innerHTML = `<button>SOLD</button>`
    })
}

let itembtn8 = document.querySelector(".itembtn8");

if(itembtn8){

    itembtn8.addEventListener("click", function(){

        itembtn8.innerHTML = `<button>SOLD</button>`
    })
}

let itembtn10 = document.querySelector(".itembtn10");

if(itembtn10){

    itembtn10.addEventListener("click", function(){

        itembtn10.innerHTML = `<button>SOLD</button>`
    })
}

let itembtn11 = document.querySelector(".itembtn11");

if(itembtn11){

    itembtn11.addEventListener("click", function(){

        itembtn11.innerHTML = `<button>SOLD</button>`
    })
}

let itembtn12 = document.querySelector(".itembtn12");

if(itembtn12){

    itembtn12.addEventListener("click", function(){

        itembtn12.innerHTML = `<button>SOLD</button>`
    })
}



//RESULT CHECKER

    function resultCheck(e){

    
            e.preventDefault();
        
            closeR.style.display="block"
        
            fetch("/results/result1.json")
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                        output = `<h2>RESULTS 200 LEVEL</h2>
                        <div class="results2">
                        <table border="2px">
                            <th>
                                SUBJECT
                            </th>
                            <th>
                                GRADE
                            </th>
                            </table>
                            </div>`
                
                        data.forEach(function(user){
                            output +=`
                            
                            
                            <table class="results" border=2px>
                            <tr>
                                <td>
                                    ${user.subject}
                                </td>
                                <td>
                                    ${user.grade}
                                </td>
                
                            </tr>
                            
                    
                        </table>
                            `
                        })
                
                        displayRes.innerHTML = output
                        });
                
                        displayRes.style.display="block"
   
    }

   function resultCheck2(e){

    
    e.preventDefault();
   
    closeR.style.display="block"
   
    fetch("/results/result2.json")
       .then(function(res){
           return res.json();
       })
       .then(function(data){
           console.log(data);
           output = `<h2>RESULTS 100 LEVEL</h2>
           <div class="results2">
           <table border="2px">
               <th>
                   SUBJECT
               </th>
               <th>
                   GRADE
               </th>
               </table>
               </div>`
   
           data.forEach(function(user){
               output +=`
               
               
               <table class="results" border=2px>
               <tr>
                   <td>
                       ${user.subject}
                   </td>
                   <td>
                       ${user.grade}
                   </td>
   
               </tr>
               
       
           </table>
               `
           })
   
           displayRes.innerHTML = output
        });
   
        displayRes.style.display="block"
   
   }

   function resultCheck3(e){

    
    e.preventDefault();
   
    closeR.style.display="block"
   
    fetch("/results/result3.json")
       .then(function(res){
           return res.json();
       })
       .then(function(data){
           console.log(data);
           output = `<h2>RESULTS 300 LEVEL</h2>
           <div class="results2">
           <table border="2px">
               <th>
                   SUBJECT
               </th>
               <th>
                   GRADE
               </th>
               </table>
               </div>`
   
           data.forEach(function(user){
               output +=`
               
               
               <table class="results" border=2px>
               <tr>
                   <td>
                       ${user.subject}
                   </td>
                   <td>
                       ${user.grade}
                   </td>
   
               </tr>
               
       
           </table>
               `
           })
   
           displayRes.innerHTML = output
        });
   
        displayRes.style.display="block"
   
   }


//LOGIN PAGE EVENT

loginbtn.addEventListener("click", function(e){

    e.preventDefault();

   signinform.style.display="block";



})

createacc1.addEventListener("click", function(){

    signinform.style.display="none";

    signupform.style.display="block";

    msg1.innerHTML = ""

})

createacc2.addEventListener("click", function(){

    signinform.style.display="block";

    signupform.style.display="none";

    msg1.innerHTML = ""

})

close1.addEventListener("click", function(){
    signinform.style.display="none";

    

})

close2.addEventListener("click", function(){
    signupform.style.display="none";

    

})

// loginbtn.innerHTML = userdisplay input username

//INPUT STYLE
user1.style.fontFamily="'Lato', sans-serif"
user1.style.color="rgb(31, 31, 58)"
user1.style.fontSize="20px"

user2.style.fontFamily="'Lato', sans-serif"
user2.style.color="rgb(31, 31, 58)"
user2.style.fontSize="20px"

email1.style.fontFamily="'Lato', sans-serif"
email1.style.color="rgb(31, 31, 58)"
email1.style.fontSize="20px"

email2.style.fontFamily="'Lato', sans-serif"
email2.style.color="rgb(31, 31, 58)"
email2.style.fontSize="20px"

pass1.style.fontFamily="'Lato', sans-serif"
pass1.style.color="rgb(31, 31, 58)"
pass1.style.fontSize="20px"

pass2.style.fontFamily="'Lato', sans-serif"
pass2.style.color="rgb(31, 31, 58)"
pass2.style.fontSize="20px"

conpass.style.fontFamily="'Lato', sans-serif"
conpass.style.color="rgb(31, 31, 58)"
conpass.style.fontSize="20px"

name1.style.fontFamily="'Lato', sans-serif"
name1.style.color="rgb(31, 31, 58)"
name1.style.fontSize="20px"

name2.style.fontFamily="'Lato', sans-serif"
name2.style.color="rgb(31, 31, 58)"
name2.style.fontSize="20px"








function hoverUser(){

    
    const re = /^[a-zA-Z]{5,10}$/;

    if(!re.test(user1.value)){
        user1.classList.add("is-invalid");
    }
}


