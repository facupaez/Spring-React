// exportando objeto
export const papper = {
  productType: "papper",
  price: 100,
  quantity: 10,
};

// exportando objeto
export const invoices = [
  {
    id: 1,
    type: "A",
    detail: "Compras de oficina",
    date: new Date(),
    client: {
      name: "Intel",
      lastName: "Inc",
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
      papper,
    ],
  },
  {
    id: 2,
    type: "A",
    detail: "Compras de computación",
    client: {
      name: "AMD",
      lastName: "ADM Sempron",
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
      papper,
    ],
  },
  {
    id: 3,
    type: "A",
    detail: "Compras de papeleria",
    client: {
      name: "Gigabyte",
      lastName: "Giga",
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
      papper,
    ],
  },
];

// exportando funcion
export const invoiceFind = (clientName) => {
  return invoices.find((el) => el.client.name === clientName);
};

// export default
export default () => invoices.map((el) => el.client.lastName);

// otra forma de exportar y exportar como default
/* 
export { papper, invoices, invoiceFind as default}; 
*/
