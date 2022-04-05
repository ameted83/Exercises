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

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
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

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundedJob = jobs.find((item) => item.id === id);
      if (foundedJob) {
        resolve(foundedJob);
      } else reject(new Error("job not found"));
    }, 1000);
  });
}

Promise.all([fetchPersonById(1), fetchJobById(2)]).then((value) =>
  console.log(value)
);
