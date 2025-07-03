//1. var: is an old way 
// befor ES6
//functionaly/locally + globle scope

 var a = 10 ;// global scop
 function test() {
    var y=20; // just scop in function
 }
 console.log(a);

 var pop ="hi js"// global scop
 function rel(params) {
    var top = "hello js"// just scop in function
 }
 rel()
 console.log(top);

 // can we redefine the variable ?
 // yes ,  but it give you recently define variable
 // you can redeclare a variable
 var browser = "chrom"
 var browser ="fir fox"
 console.log(browser)

 // issue with var key word
 // why shoud not use var key word?
 var flag ="hi naveen"
 var t1 = 4

 if (t1>
    5) {
    var flag =" hey tom "
 }
 console.log(flag);

 // let 
 // it is an block scop
// let key only accessible in block
 let mesg
  = "hey naveen"
 let time =4
 if (time>3) {
    let mesg = "how are you"
    console.log(mesg);
 }
console.log(mesg);

// const 
// you can not re-initialize with const key word
const mg = 'hey naveen'
mg = "hey naven"
console.log(mg);

