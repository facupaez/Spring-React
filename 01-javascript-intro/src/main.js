// creando objeto factura
const invoice = {
  id: 10,
  type: "A",
  detail: "Compras de oficina",
  date: new Date(),
  client: "Asus",
  total: 1500,
};

// mostrando informacion
console.log(invoice);
console.log(invoice.detail);

// modificando informacion
invoice.client = "Intel";
console.log(invoice.client);
