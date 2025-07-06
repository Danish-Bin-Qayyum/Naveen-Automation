
// --------------------( types of loops )-----------------//
 //1. for loop
 for ( let i=0 ; i<=5; i++){// simple loop structur
    console.log(i);
} // output 0,1,2,3,4,5

//2.  for...of loop
// --> for fo loop give index of array not give the value of variable
let array =[1,2,3,4,5,6]
for (const number of array) {//The for...of loop in JavaScript is used to iterate directly over the values of iterable objects
    console.log(number);      // --> it is use for extract array element
}// output 1,2,3,4,5,6        // --> Iteration over array or it is more suitable for array

 //3. while 1 to 10
 // --> its runing if the condition is true 
 let p = 1;
 while(p<=10){
    console.log(p);
    p++;
 }// output 1,2,3,4,5,6,7,8,9,10

 // do..while
 // --> it same as a while loop but it will run atleast one time
 let h = 1;
 do {
    console.log(h);
    h++;
 } while (h<=10);// output 1,2,3,4,5,6,7,8,9,10

 // for ... in loop
 // --> for in loop give the value of variabls in array
 // --> it give properties of Oobject
 const person = { // obj creating 
    naam : "danish",
    age : 30,
    city : "lahore",
}

for (let key in person){//The for...in loop in JavaScript is primarily used for iterating over the enumerable properties of an object
    console.log(person[key]);
} //output if ojb properties

const colors = ["red", 'green', 'blue']// just apply for loop on array
    for (let index in colors)
        console.log(index); // output index of the array 


