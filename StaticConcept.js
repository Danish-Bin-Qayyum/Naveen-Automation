//------------------------------------( startic concept )-----------------------------------------------------//
// --> In JavaScript, the static keyword is used inside class definitions to create static methods or properties.
// --> A static method or property belongs to the class itself, not to instances of the class.
// --> It is called directly on the class, not through an object (instance) of the class.
// --> non static method can be call by objects
class car  {
    static wheels = 4;
    constructor(name , model, price) {
          this.name = name
        this.price = price
        this.model= model
        this.wheels = 50;
        
    }
    static stop(){
        console.log("car --- stop ");
    }
    drive(){
        console.log(this.name + "is driving");
    }
}
 const c1 = new car ("honda",2302, 52)
 console.log(`${c1.name}, ${c1.model},${c1.price},${car.wheels}`);
 console.log(car.wheels);
 car.stop()
 c1.drive() // give us errer