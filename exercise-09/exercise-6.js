function getKeys(obj) {
  let newArr = [];
  for (let prop in person) {
    newArr.push(prop);
  }
  return newArr;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

const keys = getKeys(person);
console.log(keys);
