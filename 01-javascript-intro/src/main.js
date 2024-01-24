// Variables: valores que pueden cambiar
let name = "Pepe";
name = "Andres";

//Constantes: valores que no van a cambiar
const lastName = "Sanchez";

const condition = true;

// Podemos crear mismas variables siempre y cuando esten en diferente contexto
if (condition) {
  let name = "Ale";
  console.log(name);
}

console.log("Hola mundo! " + name + " " + lastName);
