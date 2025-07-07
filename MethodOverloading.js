//----------------------------( function overloading in javascript )--------------------------------//
// --> Function overloading is the ability to define multiple functions with the same name but different parameters
// --> it is not possible dirctly in javascript
// we can access overloadind  by control stament

function print(params) {
    console.log("hi");
}
function print(name) {
    console.log("hi",name);
    
}
function print(name, age) {
    console.log("hi", name ,age);
    
}
//calling
print(); // there is no output here because  it is not possible dirctly in javascript
         // and it take only rencently declare function
//to make ability to overload method by controlstatment



function displaybrowserinfo(browsername,browserversion,browserexecution) {
                   if (typeof browserversion === 'number' && typeof browserexecution)// (why we  use typof keyword if if are use this operator "===")
                   { 
                      console.log(`browser: ${browsername}, 'version ${browserversion} , execution ${browserexecution}`);
                   }
                    else if (typeof browserversion === "number")
                   {
                    console.log(`browser: ${browsername},b 'version ${browserversion} `);
                   }
                   else
                   {
                      console.log(`browser: ${browsername}`);
                   }
}
 displaybrowserinfo("chrom", 22 )