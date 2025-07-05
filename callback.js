///------------------(  callback Function )------------------------///
//async call/task -- once this tast is completed -- then only callback will be called
// why use callback function ???
// ans :  allows for asynchronous programming and control flow management, 

// ==> baic callback function
function greet(name, callback) { // delaring normal function 
    console.log('hello  ' + name);
    callback();// calling here function
}

///calling function
function welcom(params) { // simple creacting call back fuction
    console.log("wellcom.....");
}
greet('danish', welcom); //function calling
console.log(greet);  /// output is "hello danish wellcom....."

// ==> callback with async function
// --> you can pass the callback function as a aurguments

function printInfo(name, callback) { // delaring normal function 
    // async function or task
    setTimeout(function() {//  schedule the execution of a function or a piece of code after a specified delay
        console.log('orinting info for  '+ name);// prin statment
        callback("plz call me back") // function is calling here
    }, 5000); // delay time
}
///calling function
function displaymsg(msg) { // simple creacting call back fuction
    console.log(msg);
}
printInfo('danish', displaymsg) // output  orinting info for danish / plz call me back

// another example
function fetchuserData(userid,callback) { // delaring normal function 
    setTimeout(function()  { //  schedule the execution of a function or a piece of code after a specified delay
        const users = {  // just creating user variable
            1 : {id :1, name:"danisg" },
            2 : {id :2, nmae : "dom" }
        }
         const user = users(userid)
    if (null,user) {
        
    } else {
        callback("user not fiund", null)
    }
    },2000);
   

}
// callback function
function hunsleuserdata(error,userparams) {
    if (error) {
        console.error("error"+user);
        ;
    }else{
        console.log("user" );
    }
    
}