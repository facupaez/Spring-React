export const invoice = {
  id: 1,
  name: "Componentes PC",
  client: {
    name: "Dylan",
    lastname: "Doe",
    address: {
      country: "USA",
      city: "Los Angeles",
      street: "One Street",
      number: 123,
    },
  },
  company: {
    name: "New Egg",
    fiscalNumber: "123456",
  },
  items: [
    {
      id: 1,
      product: "CPU Intel i7",
      price: 500.0,
      quantity: 1,
    },
    {
      id: 2,
      product: "Teclado mecanico Corsair",
      price: 100.0,
      quantity: 3,
    },
    {
      id: 3,
      product: "Monitor ASUS",
      price: 200.0,
      quantity: 5,
    },
  ],
};
