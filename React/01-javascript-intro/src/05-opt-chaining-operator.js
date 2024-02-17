// optional chaining operator: cuando definimos como opcional un atrubuto del objeto
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

// llamamos atributo del objeto inexistente
//console.log(invoice.company.name);
// llamamos atributo del objeto inexistente y colocamos operador optional chaining
console.log(invoice.company?.name);

// como se comprobaba antes de usar el operador
if (invoice.company != undefined && invoice.company.name) {
  console.log("Atributos existen");
} else {
  console.log("Atributos NO existen");
}

if (invoice.company?.name) {
  console.log("Atributos existen");
} else {
  console.log("Atributos NO existen");
}
