// Variables: valores que pueden cambiar
let firstname = "Pepe";
firstname = "Andres";

//Constantes: valores que no van a cambiar
const lastName = "Sanchez";

const condition = true;

// Podemos crear mismas variables siempre y cuando esten en diferente contexto
if (condition) {
  let firstname = "Ale";
  console.log(firstname);
}

console.log("Hola mundo! " + firstname + " " + lastName);

// templates String con backstics
console.log(`Hola mundo! ${firstname} ${lastName}`);
