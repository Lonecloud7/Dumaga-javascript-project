
const posts = [

    {title: "post One", body:"This is post one"},
    {title: "post Two", body:"This is post two"}
];

function createPost(post){

    setTimeout(function(){
        posts.push(post);
    }, 2000)
}

function getPosts(){

    setTimeout(function(){
        let output = "";

        posts.forEach(function(post){

            output += `<li>${post.title}</li>`;
            document.body.innerHTML = output;
        })
        
    }, 1000)
}

createPost({title:"post three", body:"this is post three"});
getPosts();

display = document.getElementById("display")

