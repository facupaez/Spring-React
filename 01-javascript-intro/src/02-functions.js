// funcion comun
function sayHello() {
  console.log("Hello world with function!");
}

// funcion con return
function sayHelloReturn() {
  const greeting = "Hello world with function + return!";

  return greeting;
}
const result = sayHelloReturn();

// funcion con argumentos
function sayHelloArgs(name) {
  const greeting = `Hola ${name} with args`;

  return greeting;
}
const result2 = sayHelloArgs("Clark");

// llamar a funcion
sayHello();
console.log(result);
console.log(result2);

// ejemplo de funcion anonima
const sayHelloAnonymus = function (name) {
  const greeting = `Hola ${name} with anonymus function`;

  return greeting;
};

const result3 = sayHelloAnonymus("Anonymus");
console.log(result3);

// ejemplo de funcion flecha y optimizamos funcion para ocupar 1 linea
const sayHelloArrow = (name) => `Hola ${name} with arrow function`;
const add = (a, b) => a + b;

const result4 = sayHelloArrow("Anonymus");
console.log(result4);

const result5 = add(10, 5);
console.log(`La suma es ${result5}`);
