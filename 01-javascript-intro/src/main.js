//promises: son tareas que llevan un tiempo en ejecutarse y que en ese tiempo podemos seguir haciendo otras cosas
import invoicesById from "../src/data/invoices";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = invoicesById(3);
    console.log(result);
    //console.log("Realizando alguna tarea con demora en promise.");
  }, 3000);
});
