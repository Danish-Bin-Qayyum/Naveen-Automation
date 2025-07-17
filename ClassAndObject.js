//--------------------------------(class and objects )-------------------------------------------//
// mhy we use class ???
 // ans :  (1)  allowing for the organization and reuse of code, and the representation of real-world entities.
 
 /* classes are the blue print of objects */
class car {
    constructor(name, price,model,color) {
        this.name = name// Accessing Object Properties and Methods within Methods:
        this.price = price
        this.model= model
        this.color = color
        
    }
    retuel(){// non static method
        console.log("car is redual");
    }
}
//new keywor to craate the obj
const c1 = new car ("mbws",2000,2025,"red") // simply creacting a objects 
console.log(c1);
console.log(c1.name+"  "+c1.price+"  "+c1.model+"  "+c1.color);