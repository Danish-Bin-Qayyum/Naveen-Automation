
// map
let cities = ['LAHOR', 'KARACHI','FAISALABAD']
let lowercase = cities.map((city)=>city.toLocaleLowerCase)
console.log(lowercase);

let words = ['animal','bird','human','insects']
let countlengh =words.map(words=>words.length)
console.log(words);


//  filter
var people = [
    {name:'abe',age : 50},
    {name:'cyx',age : 40},
    {name:'mpx',age : 30},
    {name:'pqr',age : 20},
    {name:'lno',age : 10}
]

let data=people.filter(person=person.age<35);
console.log(data);

// reduce

var people = [
    {name:'abe',age : 50},
    {name:'cyx',age : 40},
    {name:'mpx',age : 30},
    {name:'pqr',age : 20},
    {name:'lno',age : 10}
]

let data2=people.filter((person,total)=> total+person.age);
console.log(data2);

let concatname = people.reduce((name,person)=>name+person.name,"")
console.log(concatname);
