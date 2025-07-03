
// --------------------( types of loops )-----------------//
 //1. for loop
 for ( let i=0 ; i<=5; i++){
    console.log(i);
}

//2.  for...of loop
// --> for fo loop give index of array not give the value of variable
let array =[1,2,3,4,5,6]
for (const number of array) {
    console.log(number);
}

 //3. while 1 to 10
 // --> its runing if the condition is true 
 let p = 1;
 while(p<=10){
    console.log(p);
    p++;
 }

 // do..while
 // --> it same as a while loop but it will run atleast one time
 let h = 1;
 do {
    console.log(h);
    h++;
 } while (h<=10);

 // for ... in loop
 // --> for in loop give the value of variabls in array
 // --> it give properties of Oobject
 const person = {
    naam : "danish",
    age : 30,
    city : "lahore",
}
for (let key in person){
    console.log(key, person[key]);
}
const colors = ["red", 'green', 'blue']
    for (let index in colors)
        console.log(index);


