// spread operator
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

// copiamos objecto en otra variable
const invoice2 = invoice;

// copiamos objeto en otra variable con spread
const invoice3 = { ...invoice };

console.log(invoice2);

const result = invoice === invoice2;

if (result) console.log("Los objetos son iguales");
else console.log("Los objetos NO son iguales");

const result2 = invoice === invoice3;

if (result2) console.log("Los objetos son iguales");
else console.log("Los objetos NO son iguales");

// modificamos la variable y se modifica la original porque son iguales
invoice2.detail = "Compras de alimentos";
// modificamos la variable con spread y NO se modifica la original porque son iguales
invoice3.detail = "Compras de limpieza";

console.log(invoice);
console.log(invoice2);
console.log(invoice3);
