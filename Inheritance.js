 /* inheritance means to give and take properties of class and function to one and other*/
 
// parent ( super class) 
class vehicle {// simply declaring class with class name 
    constructor(make, model , year) {// what is constructor
        this.make  = make;
        this.model = model;
        this.year  = year;
    }
    getInfo(){// non static fuction
        return $(this.make), $(this.model), $(this.year);
    }
    startEngin(){ // non static fuction
        console.log('starting engin...');
    }
    stopEngine(){// non static fuction
        console.log('stopping engine');
    }
}
// child class
class car extends vehicle {// use here a extends keyword to add more propertise 
    constructor(make, model, year, fueltype) {
        super(make, model, year ); // calling parent class with super keyword 
        this.fueltype = fueltype;
    }
    drivercar(){// non static fuction
        console.log('driving the car ' + this.model);
    }
}
//child class
class trunk extends vehicle {
    constructor(make, model, year , loadingcapacity) {
        super(make, model, year);
        this.loadingcapacity =loadingcapacity;
    }
    drivertruck(){// non static fuction
        console.log('driving the truck' + this.model + 'capacity'+ this.loadingcapacity);
    }
}

// creating obj
const car = new ( 'honda', 'civic' , 2020, 'petrol')
const truck = new trunk('tata', 'sumo', 2023, 100);
console.log(truck);
