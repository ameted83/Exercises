const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// Modificando l'oggetto `person2` viene modificato anche l'oggetto `person1` perchè l'assegnazione di "Simon" in firstName avviene per riferimento e non per valore.
