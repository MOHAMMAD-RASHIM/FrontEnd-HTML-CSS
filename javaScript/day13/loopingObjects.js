// Method 1 : for in loop (it gives index or key)
const empObj = {
  eID: 100,
  eName: "Alex",
  eSal: 10000,
  work: () => {
    console.log("employee is working...");
  },
};

for (key in empObj) {
  console.log(key+" => "+empObj[key]);
}
