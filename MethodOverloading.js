//----------------------------( function overloading in javascript )--------------------------------//
// --> Function overloading is the ability to define multiple functions with the same name but different parameters
// --> it is not possible dirctly in javascript
// we can access overloadind  fy control stament

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
print();

//to make ability to overload method by controlstatment
function gisplaygrowserinfo(browsername,browserversion,browserexecution) {
                   if (typeof browserversion === 'string' && typeof browserexecution) 
                   { 
                      console.log(`browser: ${browsername}, 'version ${browserversion} , execution ${browserexecution}`);
                   }
                    else if (typeof browserversion === "string")
                   {
                    console.log(`browser: ${browsername},b 'version ${browserversion} `);
                   }
                   else
                   {
                      console.log(`browser: ${browsername}`);
                   }
}
    
gisplaygrowserinfo();