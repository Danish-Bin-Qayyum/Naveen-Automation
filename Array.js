//------------------( Array )---------------------------//

// 1 . push (add element at end)
 let lang = ["java", "php","js"]
 lang.push("rubby")
 console.log(lang);

// 2 . pop   (remove element at end)
let number1 = [1,2,3,4,5]
number1.pop();
console.log(number1);

// 3 . shift  (remove element at front)
let number2 = [1,2,3,4,5]
number2.shift();
console.log(number2);

// 4 . unshift (add element at front)
let number3 = [1,2,3,4,5]
number3.unshift(0);
console.log(number3);

// 5 . lenght  (check lenght)
let number = [1,2,3,4,5]
console.log(number.length);

// 6 . splice  (add and remove element at spefic place)
let animals = ["dog", "cat", "fish", "bird"]
animals.splice(1,1 ,'bear')
console.log(animals);

// 7 . concat  (combine the two array and make a new one)
let number4 = [1,2,3,4,5]
let number5 =[6,7,8,9,0]
number4.concat(number5)
let combin = console.log(number);
console.log(combin);

// 8 . indexof  (check te index of array)
let animals1 = ["dog", "cat", "fish", "bird"]
animals1.indexOf('cat')
console.log(animals1);

//.9 include
let test =["dog", "cat", "fish", "bird"]
let flag =test.includes('bear')
console.log(flag);

//10 . foreach (print all elements)
let n = [1,2,3,4,5,6,7,8,9]
n.forEach((e) => {
    console.log(e);
})

//11. slice (altrat an array)
let pop = [1,2,3,4,5,6,7]
let newpop = pop.slice(0,5)
console.log(newpop);

//-----------------------( summary )---------------------------//

//--------------- Arrays operations -------------------//
// 1 . push (add element at end)
// 2 . pop   (remove element at end)
// 3 . shift  (remove element at front)
// 4 . unshift (add element at front)
// 5 . lenght  (check lenght)
// 6 . splice  (add and remove element at spefic place)
// 7 . concat  (combine the two array and make a new one)
// 8 . index  (check te index of array)
// 9 . include (find a specefic array)
//10 . foreach (print all elements)
//11 . slice (alterat an array)