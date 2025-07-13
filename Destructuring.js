//-------------------------( Destructuring )---------------------------//
// --> Destructuring in JavaScript is a syntax that allows for extracting and unpacking 
// values from arrays or properties from objects into distinct variables
// --> 	Array Destructuring: Enables extracting elements from an 
// array and assigning them to individual variables based on their position.

const number =[1,2,3,4,5,6];// simply array
const [a,b,c,d,e,f] = number;
console.log(a);// output is 1
console.log(b);// output is 2
console.log(c);// output is 3
console.log(d);// output is 4
console.log(e);// output is 5
console.log(f);// output is 6
// output is 

//using spread operat 

const lang = ["java","python", "goto", "rudy"]
// extracting and unpacking values from arrays   ( there is a quetion ???)
const [p,q, ...testlang] = lang;// using two arrgument and rest array
console.log(p); //output java
console.log(q);// output python
console.log(testlang);// output [ "goto", "rudy"]

//object destructing 
const user = {
    firstname: "tom",
    lastname: "smith",
    age : 30 
}

const { firstname,lastname,age}= user;
 console.log(firstname);
 console.log(lastname);
 console.log(age);
// output is tom, smith ,30


 // with function parameter
 function prinusername({firstname,lastname}) {
    console.log(firstname + "" + lastname);
    
 }
  const person = { // 
    firstname: "jon",// creacting object properies
    lastname: " doe"
  }
  prinusername(person); // output is jon , doe