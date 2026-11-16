// 1. object creation using OBJECT LITERAL
const student = {
  name: "Alex",
  age: 20,
  grade: "A",
  subject: "Computer Science",
  learns: () => {
    return `${this.name} is learning ${this.subject}`;
  },
};

console.log(student.learns());
