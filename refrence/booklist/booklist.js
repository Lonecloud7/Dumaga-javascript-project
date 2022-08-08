
function Book(title, author, isbn){

    this.title = title;
    this.author = author;
    this.isbn = isbn
}

function UI(){

    UI.prototype.addBookToList = function(book){
        //console.log(book);
        const list = document.getElementById("book-list");
        const row = document.getElementById("tr");
        //test to see if the <tr> has been actually created.
        //console.log(row);

        //insert cols

        row.innerHTML = `
                        
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        
                        <td><a href = "" class = "delete">X</a></td>`;

                        list.appendChild(row);
    }

    UI.prototype.showAlert = function(message, className){

        //create div

        const div = document.createElement("div");

        //add class name or classes

        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        //get parent

        const container = document.querySelector("container");

        const form = document.querySelector("#book-form");
        
        container.insertBefore(div, form);

        //set time out: note settlement, is part of the window object.

        setTimeout(function(){

            document.querySelector(".alert").remove();
        },3000);
    }

    //delete book

    UI.prototype.deleteBook = function(target){

        if(target.className == "delete"){

            target.parentElement.remove();
        }
    }

    //clear fields

    UI.prototype.clearFields = function(){

        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }

    //event listner for add book
    //add evnt list

    document.getElementById("book-form").addEventListener("submit", function(e){
        e.preventDefault();
        //select fields

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const isbn = document.getElementById("isbn").value;

        //instantiate a book. this is, crate a book project

        const book = new Book(title, author, isbn);

        //instantiate UI

        const ui = new UI();

        //add book list

        //test your ui see if it works, you will se on the console that the method os stated inside it (add)

        //validate the form(booklist add)

        if(title ==""|| author ==""|| isbn == ""){

            ui.showAlert("pleas fill in all fields", "error");

        }

        else{
            ui.addBookToList(book);

            ui.showAlert("book has been added", "success");

            ui.clearFields();
        }
        
    });

    // eventlistener for delete

    document.getElementById("book-list").addEventListener("click", function(e){
        e.preventDefault();
         ui1 = new UI();

         ui1 = deleteBook(e.target);
         ui1.showAlert("Book removed", "success");

         
    })
}