// To create an object using the Factory Function

function createCarObject(carName, carCost, carMileage) {
  return {
    name: carName,
    cost: carCost,
    mileage: carMileage,
    start: function () {
      console.log(`${this.name} is starting....`);
    },
  };
}

const c1 = createCarObject("santro", 25.5, 30);
console.log(c1.name, c1.cost, c1.mileage);
c1.start();
