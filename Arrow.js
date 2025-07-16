
///---------------------------( declaring Arrow function  )----------------------//
//1. case 
/* simply define arrow function without  Brackets in the cacre of sigal arrgument*/
const square = num => num*num;
const result = square(5);
console.log(result);// print result of function

//2. case
/* simply define arrow function with  Brackets in the case of multiple arrgument */
const mesg = (a,b) => a+b;
console.log(mesg(2,3));

//3. case
/*passing arrgument in the foam of templet literals*/
const getfullname =() => `${person.first} ${person.second}`
const person = {
    first : "naveen",
    second : "automatiom"
}
const fullname=getfullname()
console.log(fullname); // output ( naveen automation)

//4. case
/* passinf arrgument with defualt value*/
const greet = (user = "danish",age=20) => `hell0, ${user} you are ${age} year old` 
const g1 = greet();
console.log(g1); // uotput is (hello danish you are 20 year old )

//5. case
/*rest parameters (...)rest parameter that allows you to collect an indefinite number of arguments
* into an array and used for infinit number of arguments
* the accumulator is a value that accumulates (جمع کرنا) the result of the reducer */
const sum = (...numbers) => numbers.reduce((acc,num)=> acc+num,5);//array.reduce(callback(accumulator, currentValue)
const total = sum(1,2,3,4,5);
console.log(total);  // output 20 (add all the value)

//6. case 
/* defualt arrgument and rest parameter that allows you to collect an indefinite number of arguments
* into an array*/
const broswerinfo = (broswer = "chrom",...details)=>{ 
    console.log(`browser : ${broswer}`);// print the browers defualt value              
    console.log('other details', details); // print the rest parameter arrguments
}
broswerinfo() //output brower :  chrom :  // brower : firfox
broswerinfo("firfos","muzela","edge", " uc brower")// output of other details("muzela","edge", " uc brower")

//.7 case
/*max number using math.max */
const findmxanumber=(a,b,c)=>{
    return Math.max(a,b,c);  
}
const maxvalue = findmxanumber(19,65,45)
console.log(maxvalue); // output is 65