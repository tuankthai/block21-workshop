class Car{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;       
    }
    getDescription() {
        console.log(`this is a ${this.make} ${this.model} ${this.year}`)
    }
}

class ElectricCar extends Car{
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range  = range
    }
    getDescription() {
        console.log(`${this.make} ${this.model} ${this.year} has range of ${this.range}`)
    }

}

const car = new Car('tesla', 'model x', 2022)
car.getDescription()

const car2 = new ElectricCar('tesla', 'model S', 2022, '300 miles')
car2.getDescription();