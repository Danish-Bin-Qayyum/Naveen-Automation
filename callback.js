///------------------(  callback Function )------------------------///
// why use callback function ???
// ans :  allows for asynchronous programming and control flow management, 

/* A callback is a function passed as an argument to another function
* This technique allows a function to call another function
* A callback function can run after another function has finished */
function greet(name, callback) { 
    console.log('hello  ' + name);
    callback();
}
///calling function
function welcom() { 
    console.log("wellcom.....");
}
greet('danish', welcom); 
console.log(greet);  /// output is "hello danish wellcom....."

/*callback with async function
* you can pass the callback function as a aurguments*/
function printInfo(name, callback) { 
    setTimeout(function() {//  schedule the execution of a function or a piece of code after a specified delay
        console.log('orinting info for  '+ name);
        callback("plz call me back") 
    }, 5000); // delay time
}
///calling function
function displaymsg(msg) { // simple creacting call back fuction
    console.log(msg);
}
printInfo('danish', displaymsg) // output  orinting info for danish / plz call me back


// ====>>  summay
/*A basic callback for greeting and welcoming.
* A callback in an asynchronous context using setTimeout.
* A simulated user data fetch using a callback for handling success and error cases.
* Corrected */