// operador ternario: se compone de 3 partes: condicion booleana, devuelve verdadero sino devuelve falso
const average = 5.9;
const statusAvrg = average >= 5.5 ? "Aprobado" : "Reprobado";

console.log(`El resultado es: ${statusAvrg}`);

let max = 0;

const a = 11;
const b = 8;
const c = 9;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`El numero mayor es: ${max}`);
