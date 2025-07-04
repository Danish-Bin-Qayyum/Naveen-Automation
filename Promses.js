///-----------------(  Promisis )---------------------///
// --> defination : , a Promise is an object that represents the eventual completion 
// (or failure) of an asynchronous operation and its resulting value 
// (a commitment by someone to do or not do something)
// --> Promisis is a way to perfoam asynic operation
// --> structured and readable way to handle code that takes time to complete,
// --> Error Handling, time taken process , file loading
// --> Improved Readability and Maintainability: 
// --> promisis have three state 1-resolve  2-pending  3-rejected
// --> there two inbult callback functions which recive promisis .then and .catch

const  randonValuePromisis = new Promise ((resolve,reject)=>{ // asign a promse in new variable
    const randonValue = Math.random()// it is a inbuilt math function in js which take automalticaly a randon value
    setTimeout(() => {  //  schedule the execution of a function or a piece of code after a specified delay
        if (randonValue>0.5) {
            resolve(randonValue)//  constructor's executor function to manage the promise's state resole value 
        }else{
            reject(new Error("this value is not valide"));// constructor's executor function to manage the promise's state with reject value and throw a error to .catche method
        }
    }, 2000);// delay of two seconds
})
randonValuePromisis // call the promise  ( related calling ? )
.then(result => { // .then() method in JavaScript , which are objects representing the eventual completion or failure of an asynchronous operation.
    console.log("promosis is fulfilled ", result); //print the resolve statement
})
.catch(Error => {
   console.error("promisis is reject" , Error);// catch the error froam promise in case of reject promise
});
//      output is fulfillled

/// ==> Promisis chaining
// -->  technique for handling sequences of
//  asynchronous operations in a structured and readable manne
// --> where each step executes only after the previous one successfully

function geteveresolvesnnumber(value, delay) {  // function name and declar tow variable

    return new Promise((resolve,reject)=>{ // there is  difine promise with new keyword(a built-in operator used to create instances of objects from constructor functions or classes.)
        setTimeout(() => { //  schedule the execution of a function or a piece of code after a specified delay
            if (value % 2 == 0) { // calculates the remainder of a division operation which should be equal to zero
                resolve(value) //  constructor's executor function to manage the promise's state resole value 
            } else {
                reject(new error("value is not a even number"));// constructor's executor function to manage the promise's state with reject value
            }
        }, 2000); // delay time
    })
};
//promisis chain
getevennumbe(2,1000) // calling a normal function passing arrguments
// --> we can pass the resole value one by one using .then() 
.then(result=>{ // .then() method in JavaScript , which are objects representing the eventual completion or failure of an asynchronous operation.
    console.log("step 1 get the result even number",result);//print the resolve statement step 1
    return getevennumber(3,2000) // calling here normal function
})                               // it will call to next .then() method
.then(result=>{ // .then() method in JavaScript , which are objects representing the eventual completion or failure of an asynchronous operation.
 console.log("step 1 get the result even number",result);//print the resolve statement step 2
})
.catch(error=>{
    console.log("promisis chain error",error);// catch the error froam promise in case of reject promise
})

///===>Promises.all
// -->it use when want you to perform multiple asynic operatins in parallel
// --> wait for all of them to complete before moving on ( when all the promise in completed then give anser in form arry )
// --> it will not run if any promise is rejeect
const function1 = ()=>{// arrow function
    return new Promise ((resolve, reject)=> { // promise function define 1
        setInterval(() => {//  schedule the execution of a function or a piece of code after a specified delay
            resolve("don")//  constructor's executor function to manage the promise's state resole value 
        }, 2000); // delay time
    })
}
const function2 = ()=>{
    return new Promise ((resolve, reject)=> {// promise function define 2
        setInterval(() => {//  schedule the execution of a function or a piece of code after a specified delay
            resolve("don")//  constructor's executor function to manage the promise's state resole value 
        }, 2000); // delay time
    })
}
const function3 = ()=>{
    return new Promise ((resolve, reject)=> {// promise function define 3
        setInterval(() => {//  schedule the execution of a function or a piece of code after a specified delay
            resolve("don")//  constructor's executor function to manage the promise's state resole value 
        }, 2000); // delay time
    })
}
Promise.all([       // give result of all promise in array 
    function1(),    // It takes an iterable (commonly an array) of promises and returns a single promise that: 
    function2(),    // usin in Fetching Multiple Resources Simultaneously
    function3(),    //Parallel Processing of Independent Tasks:
])
 .then(dataArry => { // .then() method in JavaScript , which are objects representing the eventual completion or failure of an asynchronous operation.
    console.log('all data from fun',dataArry);//print the resolve statement
 })
 .catch(error => {
    console.log('error is promisis');// catch the error froam promise in case of reject promise
 })
 /// ==> output in (all data from fun [ 'don','don', 'don'])

///===> Promises.Allsettled
// --> if the number of promises is resolve it will give you a combin result
// --> usful when you want to process, whether they succeed or fail,
// --> it use when want you to perform multiple asynic operatins in parallel
// --> you want to gather information about the outcome of each promises 
// --> it will be run if any of promise if reject and give other promises
const getData = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {//  schedule the execution of a function or a piece of code after a specified delay
            resolve("data from fetdat")//  constructor's executor function to manage the promise's state resole value 
        }, 2000); // delay time
    })
}
const getError = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {//  schedule the execution of a function or a piece of code after a specified delay
            resolve("error : data is not avaible from geterror")//  constructor's executor function to manage the promise's state resole value 
        }, 2000); // delay time
    })
}
Promise.allSettled([  // it wiil settled all promise if any of them is rejected
    getData(),
    getError()
])
.then(results =>{ // .then() method in JavaScript , which are objects representing the eventual completion or failure of an asynchronous operation.
    results.forEach(results=>{
        if (results.status === "fulfilled") { // status keyword is use to check th status of promise 
            console.log("value",results.value);
        } else {
           console.error("reason for rejection ",results.reason);//( reason key word ?)
           
        }
    })
})// give us both uotput resolve reject 



// Promises
// --> to see the which promise settles first
const resolvePromisis = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {//  schedule the execution of a function or a piece of code after a specified delay
            resolve("resolve")//  constructor's executor function to manage the promise's state resole value 
        }, 1000); // delay time
    })
}
const rejectPromisis = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {//  schedule the execution of a function or a piece of code after a specified delay
            resolve("rejected")//  constructor's executor function to manage the promise's state resole value 
        }, 500); // delay time
    })
}
Promise.race([
    resolvePromisis(),
    rejectPromisis()
])
.then(result =>{ // .then() method in JavaScript , which are objects representing the eventual completion or failure of an asynchronous operation.
    console.log("result", result);
})
.catch(error =>{
    console.log("error" ,error);// catch the error froam promise in case of reject promise
})
//output is rejected becouse second method has less time

///==>Promises.any
// --> it is used for handlin multiple promises and resolving with value of the first 
//   fulfillin promise, similar to however, unlike promise.race(), promise.any reject
//   immediately when the first promise rejects instead, it waits until at least one
//   promise fulfills/resolved
const getmsg = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {//  schedule the execution of a function or a piece of code after a specified delay
            resolve("get msg from api")//  constructor's executor function to manage the promise's state resole value 
        }, 500); // delay time
    })
}
const getuser = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {//  schedule the execution of a function or a piece of code after a specified delay
            resolve("error  user dat could not be fetched")//  constructor's executor function to manage the promise's state resole value 
        }, 200); // delay time
    })
}
const getProduct = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {//  schedule the execution of a function or a piece of code after a specified delay
            resolve("product could not be fetched")//  constructor's executor function to manage the promise's state resole value 
        }, 1000); // delay time
    })
}
Promise.any([ // it is wait for promise to any of them is resolve if no any reslve then it will give a error
    getmsg(),
    getuser(),
    getmsg(),
])
.then(results =>{ // .then() method in JavaScript , which are objects representing the eventual completion or failure of an asynchronous operation.
    console.log('first succesful result ', results);//will log the first resolve promise
})
.catch(error => {
    console.error("all promise rejected",error);// catch the error froam promise in case of reject promise
})
 // out put is first method is reslove


// -----------------------------------( Summar )----------------------------------------///
//
// promise class give six method to handling API
// there are six methods to handling  async parallel programming 
// .all , .any, .allsettled and race which are perfoam task based on array
// tow are simple resolve and reject





 


