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
   console.error("promisis is reject" , Error);
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
.then(result=>{
 console.log("step 1 get the result even number",result);//print the resolve statement step 2
})
.catch(error=>{
    console.log("promisis chain error",error);//print the error statement 
})

///===>Promises.all
// -->it use when want you to perform multiple asynic operatins in parallel
// --> wait for all of them to complete before moving on ( when all the promise in completed then give anser in form arry )
const function1 = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {
            resolve("don")
        }, 2000);
    })
}
const function2 = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {
            resolve("don")
        }, 2000);
    })
}
const function3 = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {
            resolve("don")
        }, 2000);
    })
}
Promise.all([   // give result of all promise in array 
    function1(),
    function2(),
    function3(),
])
 .then(dataArry => {
    console.log('all data from fun',dataArry);//print the resolve statement
 })
 .catch(error => {
    console.log('error is promisis');//print the error statement 
 })
 /// ==> output in (all data from fun [ 'don','don', 'don'])

///===> Promises.Allsettled
// --> if the number of promises is resolve it will give you a combin result
// --> usful when you want to process, whether they succeed or fail,
// --> you want to gather information about the outcome of each promises 
/*const getData = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {
            resolve("data from fetdat")
        }, 2000);
    })
}
const getError = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {
            resolve("error : data is not avaible from geterror")
        }, 2000);
    })
}
Promise.allSettled([
    getData(),
    getError()
])
.then(results =>{
    results.forEach(results=>{
        if (results.status === "fulfilled") {
            console.log("value",results.value);
        } else {
           console.error("reason for rejection ",results.reason);
           
        }
    })
})

// Promises
// --> to see the which promise settles first
const resolvePromisis = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {
            resolve("resolve")
        }, 1000);
    })
}
const rejectPromisis = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {
            resolve("rejected")
        }, 500);
    })
}
Promise.race([
    resolvePromisis(),
    rejectPromisis()
])
.then(result =>{
    console.log("result", result);
})
.catch(error =>{
    console.log("error" ,error);
})

///==>Promises.any
// --> it is used for handlin multiple promises and resolving with value of the first 
//   fulfillin promise, similar to however, unlike promise.race(), promise.any reject
//   immediately when the first promise rejects instead, it waits until at least one
//   promise fulfills/resolved
const getmsg = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {
            resolve("get msg from api")
        }, 500);
    })
}
const getuser = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {
            resolve("error  user dat could not be fetched")
        }, 200);
    })
}
const getProduct = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {
            resolve("product could not be fetched")
        }, 1000);
    })
}
Promise.any([
    getmsg(),
    getuser(),
    getmsg(),
])
.then(results =>{
    console.log('first succesful result ', results);//will log the first resolve promise
})
.catch(error => {
    console.error("all promise rejected",error);//will log all rejection reasons reject
})*/


// -----------------------------------( Summar )----------------------------------------///
// promise class give six method to handling API
// there are six methods to handling  async parallel programming 
// .all , .any, .allsettled and race which are perfoam task based on array
// tow are simple resolve and reject












