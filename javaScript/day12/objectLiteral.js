const d = {
  name1: "BRUNO",
  age: 18,

  bark: function () {
    console.log(`${this.name1} is barking and he is ${this.age} years old`);
  },
};
console.log(d.name1);
d.bark();
