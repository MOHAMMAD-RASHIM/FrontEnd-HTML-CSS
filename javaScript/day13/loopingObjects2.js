// Method 3: Object.values()
const empObj = {
  eID: 100,
  eName: "Alex",
  eSal: 10000,
  work: () => {
    console.log("employee is working...");
  },
};
const items = Object.values(empObj);
console.log(items);

// Method 4: Object.entries()
const entries = Object.entries(empObj);
console.log(entries);

for (entry in entries) {
  // entry gives index that is 0 1 2 3... but entries[entry] provides each entry as an array
  console.log(entry);
  console.log(entries[entry]);
}

for (x of entries) {
  console.log(x[0]);
  console.log(x[1]);
}
