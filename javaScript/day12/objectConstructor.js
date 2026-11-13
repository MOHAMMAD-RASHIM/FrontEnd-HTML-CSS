// To create an object by using Object constructor
const car = new Object();
car.name = "santro";
car.cost = 25;
car.mileage = 5;
car.start = function () {
  console.log(`${this.name} is starting...`);
};
car.stop = function () {
  console.log(`${this.name} is stopping...`);
};
car.accelerate = function () {
  console.log(`${this.name} is accelerating...`);
};

car.start();
car.accelerate();
car.stop();
