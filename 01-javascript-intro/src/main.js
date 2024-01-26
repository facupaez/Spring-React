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

// relacionando objetos y metodos
/* const invoice = {
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
console.log(greeting); */

// relacionando objetos y metodos con argumentos
const invoice = {
  id: 10,
  type: "A",
  detail: "Compras de oficina",
  date: new Date(),
  client: {
    id: 2,
    name: "Intel",
    lastName: "INC",
    buildAge: 1970,
  },
  items: [
    {
      product: "keyboard",
      price: 200,
      quantity: 2,
    },
    {
      product: "mouse",
      price: 100,
      quantity: 2,
    },
    {
      product: "monitor",
      price: 500,
      quantity: 5,
    },
  ],
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
  greeting: function () {
    return `Hola ${this.client.name}`;
  },
};

console.log(`El total de la compra es: ${invoice.total()}`);
