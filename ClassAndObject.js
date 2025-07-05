//--------------------------------(class and objects )-------------------------------------------//
// --> classes are the blue print of objects
// mhy we use class ???
 // ans :  (1)  allowing for the organization and reuse of code, and the representation of real-world entities.
class car {
    constructor(name, price,model,color) {
        this.name = name
        this.price = price
        this.model= model
        this.color = color
        
    }
    retuel(){
        console.log("car is redual");
    }
}
//new keywor to craate the obj
const c1 = new car ("mbws") // simply creacting a objects 