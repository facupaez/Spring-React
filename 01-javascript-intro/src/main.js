//promises: son tareas que llevan un tiempo en ejecutarse y que en ese tiempo podemos seguir haciendo otras cosas
import { invoicesById } from "../src/data/invoices";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //const result = invoicesById(3);
    const result = invoicesById(5);
    if (result) {
      resolve(result);
    } else {
      reject("Error, no existe el id solicitado.");
    }
  }, 3000);
});

promise
  .then((result) => {
    console.log(result);
    console.log("Se realizó con éxito la tarea con delay de promise.");
  })
  .catch((error) => console.warn(error));
