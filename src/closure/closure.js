function greeting() {
    let username = 'Pedro';

    function displayUserName() {
        return `Hello ${username}`;
    }

    return displayUserName;
}

 const g = greeting();
    console.log(g); // console.log(greeting()); // [Function: displayUserName]
    console.log(g()); // console.log(greeting()()); // Hello Pedro
