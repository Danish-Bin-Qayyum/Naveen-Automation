//------------------( Async - Await )----------------------------//
// --> it is an modern  way of handling asyns steps
// --> it will return a promise (mandatory)
// --> not need to use await keyword in normal function
// --> it is only use in promises

async function f1(params) {
    console.log("this is an async fun without await step");
    return 42 
}
 f1().then(result=>{
    console.log(result);
})

// asyn function without await with error
async function f1() {
    console.log("this is an async fun with error");
    throw new error("this is my error");
    
}
f2().catch(error=>{
    console.log("the error msg ${error}");
})

// async  function with resolve and reject promise
function getinfo(params) {
    return new Promise((resolve, reject)=>{
        const ramdomber =Math.ramdom;
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
async function getinumbernfo(params) {
    try {
        const result = await getinfo()
        console.log("await", result);
    } catch (error) {
        console.log("error", error);
    }
}
getinumbernfo();
