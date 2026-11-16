// adding modifying and deleting properties

const empObj = {
  eID: 100,
  eName: "Alex",
  eSal: 10000,
  work: () => {
    console.log("employee is working...");
  },
};
console.log(empObj);
empObj.age = 18; //  adding property to an employee object...
console.log(empObj);

empObj.eSal = 20000; // modifying property
console.log(empObj);

delete empObj.eSal; // deleting object
console.log(empObj);

//typeof
console.log(typeof empObj);

// in operator
console.log("eID" in empObj);
console.log("eSal" in empObj);
