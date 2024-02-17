// destructuracion de funciones: desarmar funciones y obtener sus atributos como variables

const user = {
  username: "coco",
  email: "coco@correo.com.ar",
  age: 30,
  ranking: 5,
};

// obteniendo atributos de una funcion con destructuracion
const details = ({ username, email }) => {
  console.log(`Detalle de usuario ${username} con correo ${email}`);
};

details(user);
