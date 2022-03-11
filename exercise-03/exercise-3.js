const students = ["Paul", "George", "Lucas"];

function addStudent(student) {
  students.push(student);
}

addStudent("Marco");
console.log(students);

/* il motivo per cui abbiamo la possibilità di aggiungere un elemento all'array 
nonostante abbiamo dichiarato la variabile come `readonly`è appunto perchè stiamo aggiungendo un elemnto 
e non modificando "l' elemnto" ossia modificando il valore della variabile stessa,riassegnandola.*/
