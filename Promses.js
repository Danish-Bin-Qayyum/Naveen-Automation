///-----------------(  Promisis )---------------------///
// --> Promisis is a way to perfoam asynic operation 
// --> promisis have three state 1-resolve  2-pending  3-rejected
// --> there two inbult callback functions which recive promisis .then and .catch
const  randonValuePromisis = new Promise ((resolve,reject)=>{
    const randonValue = Math.random()
    setTimeout(() => {
        if (randonValue>0.5) {
            resolve(randonValue)
        }else{
            reject(new Error("this value is not valide"));
        }
    }, 2000);// delay of two seconds
})
randonValuePromisis
.then(result => {
    console.log("promosis is fulfilled ", result);
})
.catch(Error => {
   console.error("promisis is reject" , error);
});
//output is fulfillled

/// ==> Promisis chaining
function getevennumber(value, delay) {

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (value % 2 == 0) {
                resolve(value)
            } else {
                reject(new error("value is not a even number"));
                
            }
        }, delay);
    })
};
//promisis chain
getevennumbe(2,1000)
.then(result=>{
    console.log("step 1 get the result even number",result);
    return getevennumber(3,2000)
})
.then(result=>{
 console.log("step 1 get the result even number",result);
})
.catch(error=>{
    console.log("promisis chain error",error);
})

///===>Promises.all
// -->it use when want you to perform multiple asynic operatins in parallel
// -- wait for all of them to complete before moving on
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
Promise.all([
    function1(),
    function2(),
    function3(),
])
 .then(dataArry => {
    console.log('all data from fun',dataArry);
 })
 .catch(error => {
    console.log('error is promisis');
 })

///===> Promises.Allsettled
// --> if the number of promises is resolve it will give you a combin result
// --> usful when you want to process, whether they succeed or fail,
// --> you want to gather information about the outcome of each promises 
const getData = ()=>{
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
})















