let name = "Talis";
const year = 2010;

function Student(name) {
  this.name = name;
  let score = 100;
}

let student1 = new Student("");

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  moveForward() {
    return `${this.brand} is moving forward`;
  }
  stop() {
    returm`${this.model} is stopping`;
  }
  setMIlage = (milage) => {
    this.milage = milage;
  };
}
let car1 = new Car("Toyota", "Verso");
console.log(car1.moveForward());
