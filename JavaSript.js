


const f1 =  new Promise ((resolve,reject)=>{ // asign a promse in new variable
    const randonValue = Math.random()// it is a inbuilt math function in js which take automalticaly a randon value
    setTimeout(() => {  //  schedule the execution of a function or a piece of code after a specified delay
        if (randonValue>0.5) {
            resolve(randonValue)//  constructor's executor function to manage the promise's state resole value 
        }else{
            reject(new Error("this value is not valide"));// constructor's executor function to manage the promise's state with reject value and throw a error to .catche method
        }
    }, 2000);// delay of two seconds
})

.then(result => { // .then() method in JavaScript , which are objects representing the eventual completion or failure of an asynchronous operation.
    console.log("promosis is fulfilled ", result); //print the resolve statement
})
.catch(Error => {
   console.error("promisis is reject" , Error);// catch the error froam promise in case of reject promise
});