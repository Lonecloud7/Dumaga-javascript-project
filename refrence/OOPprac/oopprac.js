// console.log(window);

// window.alert("these nuts niggA");

book1 ={

    title:"book one",
    authour:"goerge rr",
    date: 1990,
    summary : function(){
        return `my lil nigga ${this.authour} wrote this dope ass
        book called ${this.title}`
    }

}

console.log(book1.summary());

function Book(authour, title, date){

    this.authour = authour;
    this.title = title;
    this.date = date;
    
}

book2 = new Book("brando sando", "stormhoe", 6969);

Book.prototype.getsummary = function(){
    return `my lil nigga ${this.authour} wrote this dope ass
        book called ${this.title}`
}

Book.prototype.reset = function (newDate){

    this.date=newDate;
    this.changed=true;
}
book2.reset(4200)


function Magazine(author, title, date, month, edition){
Book.call(this, author, title, date);

this.month=month;
this.edition=edition;


}

//inherit prototype
Magazine.prototype = Object.create(Book.prototype);

let mag1 = new Magazine("jane poll", "sex weekly", 
2015,"july", "swim suit")

console.log(mag1.getsummary());

//ES6


class Tvshow{
    constructor(title, showrunner, year){

        this.title = title;
        this.showrunner = showrunner;
        this.year = year;
    }

    badreview(){
        return `this stupid show called ${this.title} fucking sucked, and fool
         called ${this.showrunner} is an idiot, i curse the year ${this.year} for giving us
         this shit`;
    }
}

class Stuff{
    constructor(stuff1, stuff2, stuff3){

        this.stuff1 = stuff1;
        this.stuff2 = stuff2;
        this.stuff3 = stuff3;
    }

    stufftext(){
        return`this is the first stuff called ${this.stuff1}, 
        second is called ${this.stuff2} and lastly the third 
        is called ${this.stuff3}`;
    }
}

const money = new Stuff("dollars", "pounds", "euros");

const tvshow2 = new Tvshow("game of thrones", "D and D", "2011");


class Episode extends Tvshow{

    constructor(title, showrunner, year, director){
        super(title, showrunner, year)
        this.director = director;
    }
} 

const epi1 = new Episode("the night king", "d and d", "2018",
 "edgar wruth");

console.log(epi1);