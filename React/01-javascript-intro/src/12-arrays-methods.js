// metodo de arreglo map: se recibe una copia el objeto y podemos tratar se objeto para devolver algo
// metodo de arreglo find: nos permite buscar un objeto pasandole un atributo que exista en este, va a devolve el objeto completo
// metodo de arreglo filter: nos permite filtrar objetos dependiendo la condicion que le indiquemos
// metodo de arreglo some: devuelve un booleano si se cumple la condicion que indicamos

const invoices = [
  {
    id: 1,
    type: "A",
    detail: "Compras de oficina",
    date: new Date(),
    client: {
      name: "Intel",
      lastName: "INC",
    },
    items: [
      {
        product: "Escritorio",
        price: 70,
        quantity: 2,
      },
      {
        product: "Armario",
        price: 50,
        quantity: 2,
      },
      {
        product: "Pizarrón",
        price: 100,
        quantity: 5,
      },
    ],
  },
  {
    id: 2,
    type: "A",
    detail: "Compras de computación",
    client: {
      name: "Intel",
      lastName: "INC",
    },
    items: [
      {
        product: "Keyboard",
        price: 200,
        quantity: 2,
      },
      {
        product: "Mouse",
        price: 100,
        quantity: 2,
      },
      {
        product: "Monitor",
        price: 500,
        quantity: 5,
      },
    ],
  },
  {
    id: 3,
    type: "A",
    detail: "Compras de papeleria",
    client: {
      name: "Intel",
      lastName: "INC",
    },
    items: [
      {
        product: "Resma hojas",
        price: 20,
        quantity: 2,
      },
      {
        product: "Fibrón",
        price: 10,
        quantity: 2,
      },
      {
        product: "Lapicera",
        price: 2,
        quantity: 5,
      },
    ],
  },
];

// map
const invoicesDetail = invoices.map((el) => {
  return el.detail;
});

const invoicesClient = invoices.map((el) => el.client.name);

console.log(invoicesDetail);
console.log(invoices);
console.log(invoicesClient);

// find
const invoiceByDetail = invoices.find(
  (el) => el.detail === "Compras de papeleria"
);
const invoiceById = invoices.find((el) => el.id === 1);

console.log(invoiceByDetail);
console.log(invoiceById);

// filter
const invoiceFilter = invoices.filter((el) => el.id > 1);
const invoiceDeleted = invoices.filter((el) => el.id != 2);

console.log(invoiceFilter);
console.log(invoiceDeleted);

// some
const invoiceSome = invoices.some((el) => el.client.name === "Intel");

console.log(invoiceSome);
