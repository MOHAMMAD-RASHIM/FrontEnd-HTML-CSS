class Car {
  name = "santro";
  cost = 45;
  start() {
    console.log(`${this.name} is starting...`);
  }
}
const car1 = new Car();
console.log(car1.name, car1.cost);
car1.start();