// Use Scrict mode

'use strict';

pi = 3.1416;
console.log(pi); // ReferenceError: pi is not defined


function myFunction() {
    return pi = 3.1416; // ReferenceError: pi is not defined
}

console.log(myFunction()); // ReferenceError: pi is not defined

