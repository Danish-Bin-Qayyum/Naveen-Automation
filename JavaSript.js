



/* async  function with resolve and reject promise*/
function getinfo() {
    return new Promise((resolve, reject)=>{
        const ramdomber = 2// it is a inbuilt math function in js which take automalticaly a randon value
        setInterval(() => {
            if(ramdomber < 1){
                resolve(42);
            }else{
                reject(new Error("errors"))
            }
            
        }, 2000);
    })
}
/*a programming construct that allows you to handle errors
* or unexpected events that may occur during the execution of a program.*/
async function getinfo() {
    try {                              
        const result = await getinfo() // use await keyword to puase function
        console.log("await" ,result);
    } catch (error) { 
        console.log("error", error);
    }
}
getinfo(); // calling function

// output some time reject some time resole

