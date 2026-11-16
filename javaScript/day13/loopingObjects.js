// Method 1 : for in loop (it gives index or key)
const empObj = {
  eID: 100,
  eName: "Alex",
  eSal: 10000,
  work: () => {
    console.log("employee is working...");
  },
};
console.log("\n" + "Using for.....in loop");
console.log();
for (key in empObj) {
  console.log(key + " => " + empObj[key]);
}

console.log();
console.log("Using Object.keys(empObj)");

// Method 2 : Object.keys()
console.log(Object.keys(empObj));

const keyArr = Object.keys(empObj);
for (key of keyArr) {
  console.log(key + " " + empObj[key]);
}

for (let i = 0; i < keyArr.length; i++) {
  console.log(keyArr[i]);
}


