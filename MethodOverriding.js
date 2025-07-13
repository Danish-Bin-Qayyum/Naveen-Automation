
//-----------------------------------( method overriding )---------------------------------------//
// --> Method overriding occurs when a child (subclass) defines a method that already 
//exists in its parent (superclass) with the same name and parameters within a class 

// parant class
class car  {
    constructor(make, model) {
        this.make=model;
        this.make=make
    }
    startebgin (){
        console.log("staring engin");
    }
}
//clild class
class audi {
    // this is my overriden method
    startebgin() {
        console.log("starts engin");
    }

    autoparting(){
        console.log("audi parking");
    }
}

const audi = new audi()
audi.startebgin();
audi.autoparting();