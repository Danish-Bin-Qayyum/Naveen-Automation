




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
 let c1 = new car("bike", 2025, 20000)


