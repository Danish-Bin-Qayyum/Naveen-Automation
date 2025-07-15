
///---------------------------( declaring Arrow function  )----------------------//
//1. case 
const square = num => num*num;// simply define arrow function without  Brackets in the cacre of sigal arrgument
const result = square(5);// assigning function in new variable and passing arrguments
console.log(result);// print result of function

//2. case
const mesg = (a,b) => a+b;// // simply define arrow function with  Brackets in the case of multiple arrgument 
console.log(mesg(2,3));

//3. case
const getfullname =() => `${person.first} ${person.second}`// passing arrgument in the foam of templet literal
                             // ( confusing in templat literal ???)
const person = {
    first : "naveen",
    second : "automatiom"
}
const fullname=getfullname()// assigning function in new variable
console.log(fullname); // output ( naveen automation)

//4. case
const greet = (user = "danish",age=20) => `hell0, ${user} you are ${age} year old` // passinf arrgument with defualt value
const g1 = greet(); // assigning function in new variable
console.log(g1); // uotput is (hello danish you are 20 year old )

//5. case
// --> rest parameters (...)
// --> used for infinit number of arguments
const sum = (...numbers) => numbers.reduce((acc,num)=> acc+num,5);//rest parameter that allows you to collect an indefinite number of arguments into an array
           //array.reduce(callback(accumulator, currentValue)    //-->  the accumulator is a value that accumulates (جمع کرنا) the result of the reducer 
const total = sum(1,2,3,4,5);
console.log(total);  // output 20 (add all the value)

//6. case there one defualt value one rest peratmeter
const broswerinfo = (broswer = "chrom",...details)=>{ // --> defualt arrgument and rest parameter that allows you to collect an indefinite number of arguments into an array
                                                       // --> rest parameter work on base of array
    console.log(`browser : ${broswer}`);// print the browers defualt value              
    console.log('other details', details); // print the rest parameter arrguments

}
broswerinfo() //output brower :  chrom : 
                                                   // brower : firfox
broswerinfo("firfos","muzela","edge", " uc brower")// output of other details("muzela","edge", " uc brower")

//.7 case
// --> max number using math
const findmxanumber=(a,b,c)=>{ // simply defining arrow function
    return Math.max(a,b,c); // using math propertie .max of number 
}
const maxvalue = findmxanumber(19,65,45)
console.log(maxvalue); // output is 65