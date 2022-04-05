const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const foundedPerson = persons.find((item) => item.id === id);
      if (foundedPerson) {
        resolve(foundedPerson);
      } else {
        reject(new Error("id not found"));
      }
    }, 1000);
  });
}

fetchPersonById(2)
  .then((person) => console.log(person))
  .catch((err) => {
    console.log("è stato provocato un errore", err);
  });
fetchPersonById(6)
  .then((person) => console.log(person))
  .catch((err) => {
    console.log("è stato provocato un errore", err);
  });
