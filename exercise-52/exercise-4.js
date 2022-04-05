const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

for (let i = 0; i < person.length; i++) {
  const item = person[index];
  if (item === number) {
    const json = JSON.stringify(person, ["id", "age"]);
  } else {
    console.log("Sono stringa");
  }
}

// const json = JSON.stringify(person, ["id", "age"]);

console.log(json); // Should return: { id: 1, age: 25 }
