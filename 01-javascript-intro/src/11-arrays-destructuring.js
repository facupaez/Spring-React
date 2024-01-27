// destructuracion de arreglos: desarmar arreglos y obtener sus atributos como variables

const users = ["Pepe", "Juan", "Leandro", "Jesus", "Aldo"];

// obteniendo atributos de un arreglo con destructuracion
const [first, second, , , fifth] = users;

console.log(first, second, fifth);
