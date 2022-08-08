document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("zipcode").addEventListener("blur", validateZip);
document.getElementById("phoneNumber").addEventListener("blur", validatePhoneNumber);

function validateName(){

    let name = document.getElementById("name");
    const re = /^[a-zA-Z]{5,10}$/;

    if(!re.test(name.value)){
        name.classList.add("is-invalid");
    }
}

function validateZip(){

    let zip = document.getElementById("zipcode")

    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    if(!re.test(zip.value)){

        zip.classList.add("is-invalid");
    }

    else{

        zip.classList.remove("is-invalid");
    }
}

function validateEmail(){

    let email = document.getElementById("email");
    
    const re = /^[a-zA-Z0-9_\-\.]+@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){

        email.classList.add("is-invalid");
    }

    else{
        email.classList.remove("is-invalid");
    }
}

function validatePhoneNumber(){

    let phoneNumber = document.getElementById("phoneNumber");

    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!re.test(phoneNumber.value)){

        phoneNumber.classList.add("is-invalid");

    }

    else{

        phoneNumber.classList.remove("is-invalid");
    }
}

