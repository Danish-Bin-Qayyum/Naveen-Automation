//------------------( Async - Await )----------------------------//
// --> defination :  the await keyword is used within an async function to pause its execution
//  until a Promise resolves or rejects. 
// --> it is an modern  way of handling asyns steps
// --> it will return a promise (mandatory)
// --> not need to use await keyword in normal function
// --> it is only use in promises

async function f1() {//simple define a async function  (  why we use async function with .then() ?)
    return 42 // function return to the .then() method
}
 f1().then(result=>{ // calling function
    console.log(result);
})  // output is 42 print statment


// asyn function without await with errordeclaring an asynchronous function.
async function f2() {//simple define a async function
    throw new error("this is my error"); // just creacting a error in new keyword and throw keyword( used to explicitly generate or "throw" an exception. )
}
f2().catch(error=>{
    console.log(`the error msg ${error}`);
}) // output is error

// async  function with resolve and reject promise
function getinfo() {
    return new Promise((resolve, reject)=>{
        const ramdomber = Math.random// it is a inbuilt math function in js which take automalticaly a randon value
        setInterval(() => {
            if(ramdomber < 1){
                resolve(42);
            }else{
                reject(new Error("errors"))
            }
            
        }, 2000);
    })
}
//async functine which is calling getinfo() with await keyword
async function getinfo() {
    try {                               // simply try and catch method
        const result = await getinfo() // use await keyword to puase function
        console.log("await", result);
    } catch (error) { // catch error from getinfo method
        console.log("error", error);
    }
}
getinumbernfo(); // calling function

// output some time reject some time resole

