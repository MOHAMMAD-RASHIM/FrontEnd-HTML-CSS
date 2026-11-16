class Employee {
  #eId;
  #eName;
  #eSalary;
  constructor(eId, eName, eSalary) {
    this.#eId = eId;
    this.#eName = eName;
    this.#eSalary = eSalary;
  }

  getSalary() {
    return this.#eSalary;
  }
  getName() {
    return this.#eName;
  }
  getId() {
    return this.#eId;
  }
}

const emp1 = new Employee(1, "alex", 20000);
const emp2 = new Employee(2, "ajay", 15000);

console.log(emp1, emp2);

console.log(emp1.getId());
console.log(emp1.getName());
console.log(emp1.getSalary());

console.log(emp2.getId());
