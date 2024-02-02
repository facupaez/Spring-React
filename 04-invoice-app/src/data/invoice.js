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
    fiscalNumbre: "123456",
  },
  items: [
    {
      id: 1,
      product: "CPU Intel i7",
      price: 499,
      quantity: 1,
    },
    {
      id: 2,
      product: "Teclado mecanico Corsair",
      price: 99,
      quantity: 3,
    },
    {
      id: 3,
      product: "Monitor ASUS",
      price: 199,
      quantity: 5,
    },
  ],
};
