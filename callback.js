///------------------(  callback Function )------------------------///
//async call/task -- once this tast is completed -- then only callback will be called

// ==> baic callback function
function greet(name, callback) {
    console.log('hello' + name);
    callback();
}

///calling function
function welcom(params) {
    console.log("wellcom.....");
}
greet('danish', welcom);
console.log(greet);

// ==> callback with async function
// --> you can pass the callback function as a aurguments

function printInfo(name, callback) {
    // async function or task
    setTimeout(function() {
        console.log('orinting info for  '+ name);
        callback("plz call me back")
    }, 5000);
}
function displaymsg(msg) {
    console.log(msg);
}
printInfo('danish', displaymsg)

// another example
function fetchuserData(userid,callback) {
    setTimeout(function()  {
        const users = {
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