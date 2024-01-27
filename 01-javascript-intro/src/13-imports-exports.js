// import y export: importamos y exportamos funciones
// import y export default: nos permite una sola, le podemos dar el nombre que querramos

import clientLastname, { invoices, papper, invoiceFind } from "./data/invoices";

// map
const invoicesDetail = invoices.map((el) => {
  return el.detail;
});

/* const invoicesClient = invoices.map((el) => el.client.name); */

console.log(invoicesDetail);
console.log(invoices);
console.log("Buscar por cliente");
console.log(clientLastname());

// find
/* const invoiceFind = invoices.find((el) => el.detail === "Compras de papeleria"); */
console.log("Buscar por nombre de cliente");
console.log(invoiceFind("AMD"));

// filter
const invoiceFilter = invoices.filter((el) => el.id > 1);
const invoiceDeleted = invoices.filter((el) => el.id != 2);

console.log(invoiceFilter);
console.log(invoiceDeleted);

// some
const invoiceSome = invoices.some((el) => el.client.name === "Intel");

console.log(invoiceSome);
