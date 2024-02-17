//promises: son tareas que llevan un tiempo en ejecutarse y que en ese tiempo podemos seguir haciendo otras cosas
import { invoiceById, findInvoiceById } from "./data/invoices";

/*  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //const result = invoicesById(3);
      const result = invoiceById(5);
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
  .catch((error) => console.warn(error)); */

// promises en funciones

findInvoiceById(2)
  .then((result) => {
    console.log(result);
    console.log("Se realizó con éxito la tarea con delay de promise.");
  })
  .catch((error) => console.warn(error));
