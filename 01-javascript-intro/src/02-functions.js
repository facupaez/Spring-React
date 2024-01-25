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
