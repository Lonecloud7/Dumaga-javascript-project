
document.getElementById("button1").addEventListener("click", getText);

function getText(){

    fetch("fetchText.txt")
    .then(function(res){
        return res.text();
    })

    .then(function(data){
        console.log(data)
        document.getElementById("display").innerHTML = data;
    });
}

document.getElementById("button2").addEventListener("click", getJSON);

function getJSON(){
    fetch("customers.json")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        output = `<h2>CUSTOMERS</h2>
        <div class="results2">
        <table>
        <th>
                SUBJECT
            </th>
            <th>
                GRADE
            </th>
            <th>
                GPA
            </th>
            </table>
            </div>`

        data.forEach(function(user){
            output +=`
            
            
            <table class="results">
            <tr>
                <td>
                    ${user.id}
                </td>
                <td>
                    ${user.name}
                </td>
                <td>
                    ${user.email}
                </td>

            </tr>
            
    
        </table>
            `
        })

        document.getElementById("display").innerHTML = output

    });
}

document.getElementById("button3").addEventListener("click", getExtLink);

function getExtLink(){

    fetch("https://www.boredapi.com/api/activity")
    .then(function (res){

        return res.json();
    })
    .then(function(data){
        console.log(data)
        document.getElementById("display").innerHTML = data;
    })
}



button = document.getElementById("button4").addEventListener("click", getText)

function getText(){
    // fetch('fetch.txt')
    // .then(function(res){
    //     return res.text();
    // })
    // .then(function(data){
        
    //  document.getElementById("display").innerHTML = data;
    // })

//arrow functions method

    fetch("fetch1.txt")
.then( (res) => (res.text()) )
.then((data) => {

    document.getElementById("display").innerHTML = data;
})

.catch((err) => console.log(err))
}

button2 = document.getElementById("button5").addEventListener("click", getUsers)

function getUsers(){

    
}



