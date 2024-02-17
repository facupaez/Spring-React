// destructuracion de objetos: desarmar objetos y obtener sus atributos como variables

const user = {
  username: "coco",
  email: "coco@correo.com.ar",
  age: 30,
  ranking: 5,
};

// obteniendo atributo de un objeto
/* const username = user.username;
const ranking = user.ranking; 
const age = user.age; */

// obteniendo atributos de un objeto con destructuracion
const { username, ranking, age } = user;

// imprimimos atributos sin pasar por el objeto
console.log(`${username} tiene ${age} años`);
console.log(ranking);
