///---------------------------( declaring Arrow function  )----------------------//
//1. case 
const square = num => num*num;
const result = square(5);
console.log(result);

//2. case
const mesg = (a,b) => a+b;
console.log(mesg(2,3));

//3. case
const getfullname =(person) => `${person.first} ${person.second}`

const person = {
    first : "naveen",
    second : "automatiom"
}
const fullname=getfulname(person)
console.log(fullname);

//4. case
const greet = (user = "gust",age=0) => `hell0, ${user} you are ${age} year old`
const g1 = greet();
console.log(g1);

//5. case
// --> rest parameters (...)
// --> used for infinit number of arguments
const sum = (...numbers) => numbers.reduce((acc,num)=> acc+num,0);
const total = sum(1,2,3,4,5);
console.log(total);

//6. case
const broswerinfo = (broswer = "chrome",...details)=>{
    console.log(`browser : ${broswer}`);
    console.log('other details', details);

}
broswerinfo()
broswerinfo("firfos","muzela","edge")

//.7 case
// --> max number using math
const findmxanumber=(a,b,c)=>{
    return Math.max(a,b,c);

}
const maxvalue = findmxanumber(19,65,45)
console.log(maxvalue);