
 class car {
    constructor(name,price,model,color) { // simply creact class
       this.name = name ;
       this.price = price ;// Accessing Object Properties and Methods within Methods:
       this.model = model ;
       this.color = color ; 
    }
    refuel(){//non statice method
        console.log("refuel car");
        ;
    }
}
// new key to create a the obj
const c1 = new car("bnw", 100, "b2f", "black")
console.log(c1.name);
console.log(c1.price);
console.log(c1.model);
console.log(c1.color);



const c2 = new car("suzuki", 10000, "bbbu", "blue")
console.log(c2.name);
console.log(c2.price);
console.log(c2.model);
console.log(c2.color);



