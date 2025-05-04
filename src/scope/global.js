// variables 

var a; // declarando 
var b = 'b'; // declaramos / asignamos 
b = 'bb'; // reasignamos
var a = 'aa'; // redeclaramos


// Global scope

var fruit = 'Apple'; // variable global
console.log(fruit);

function bestFruit() {
    console.log(fruit); // Apple
}

bestFruit(); 

function countries() {
    country = 'Colombia'; // variable global
    console.log(country);
}

countries();
console.log(country); // Colombia