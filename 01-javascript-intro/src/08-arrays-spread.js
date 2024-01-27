// Arreglos con operador spread: creamos copias de arreglos

const products = ["Milk", "Oil", "Butter", "Meat", "Apples", "Cheese"];

products.push("Soap", "Soda", "Tuna");

const peripherals = ["Mouse", "Keyboard", "Monitor", "Headsets", ...products];

const vehicles = ["Car", "Motorcycle", "Bike", "Plane", "Truck", "Van"];

const shoppingCart = [...peripherals, ...vehicles, "Other elements"];

console.log(peripherals);
console.log(shoppingCart);
