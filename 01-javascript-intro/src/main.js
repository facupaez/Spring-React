// creando objeto factura
/* const invoice = {
  id: 10,
  type: "A",
  detail: "Compras de oficina",
  date: new Date(),
  client: "Asus",
  total: 1500,
};  */

// mostrando informacion
/* console.log(invoice);
console.log(invoice.detail); */

// modificando informacion
/* invoice.client = "Intel";
console.log(invoice.client); */

// relacionando objetos
const invoice = {
  id: 10,
  type: "A",
  detail: "Compras de oficina",
  date: new Date(),
  client: {
    id: 2,
    name: "Intel",
    lastName: "INC",
    age: 20,
  },
  total: 1500,
  greeting: function () {
    return `Hola ${this.client.name}`;
  },
};

invoice.client.name = "AMD";
console.log(invoice);
console.log(invoice.client.name);

const greeting = invoice.greeting();
console.log(greeting);
