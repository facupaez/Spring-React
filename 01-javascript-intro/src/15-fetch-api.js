/*
 api fetch: viene incluido en el navegador de js y nos permite realizar peticiones o consumir datos que vienen
 de un servidor como por ej. nuestro backend o la nube
 */

const httpClient = fetch("https://jsonplaceholder.typicode.com/users");

/* httpClient.then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
}); */

// simplificado
// asíncrono
httpClient
  .then((response) => response.json())
  .then((data) => console.log(data));

// síncrono
console.log("Síncrono");
