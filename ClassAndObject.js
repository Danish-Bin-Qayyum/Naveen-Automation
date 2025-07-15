//--------------------------------(class and objects )-------------------------------------------//
// --> classes are the blue print of objects
// mhy we use class ???
 // ans :  (1)  allowing for the organization and reuse of code, and the representation of real-world entities.
class car {// simply creact class
    constructor(name, price,model,color) {
        this.name = name
        this.price = price// Accessing Object Properties and Methods within Methods:
        this.model= model
        this.color = color
        
    }
    retuel(){// non static method
        console.log("car is redual");
    }
}
//new keywor to craate the obj
const c1 = new car ("mbws",2000,2025,"red") // simply creacting a objects 
console.log(c1
    
);