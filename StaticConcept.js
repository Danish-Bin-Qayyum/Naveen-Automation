//------------------------------------( startic concept )-----------------------------------------------------//
//Static members belong to the class itself, not to any specific instance of that class. They are declared using the static keyword within a class.
// --> In JavaScript, the static keyword is used inside class definitions to create static methods or properties.
// --> A static method or property belongs to the class itself, not to instances of the class.
// --> It is called directly on the class, not through an object (instance) of the class.
// --> non static method can be call by objects
class car  { // simply creact class
    static wheels = 4;// static variable
    constructor(name , model, price) {//a constructor is a special function or method used to create and initialize new objects. It serves as a blueprint for defining the properties and methods that new instances of an object will possess. 
        this.name = name// Accessing Object Properties and Methods within Methods:
        this.price = price
        this.model= model
        this.wheels = 50;
    }
    static stop(){//creacting static method
        console.log("car --- stop ");
    }
    drive(){ // non static method 
        console.log(this.name + "is driving");
    }
}
 const c1 = new car ("honda",2302, 52) // craecting object propertis
 console.log(`${c1.name}, ${c1.model},${c1.price},${car.wheels}`); // print object properties and use static function with class name
 console.log(car.wheels); // calling static variable with class name  , output  4
 car.stop()// calling static method , output (car --- stop)
 c1.drive() // give us errer becouse we do not define with static keyword in class if call with class name 
 // output is (honda is drinving)