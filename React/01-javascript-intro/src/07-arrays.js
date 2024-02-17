// Arreglos: son objetos que contienen varios objetos

const products = ["Milk", "Oil", "Butter", "Meat", "Apples", "Cheese"];

// agregando elementos
products.push("Soda");

console.log(products);

// iterando arreglo
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

for (const product of products) {
  console.log(product);
}

products.forEach((item) => console.log(item));

products.map((item) => console.log(item));
