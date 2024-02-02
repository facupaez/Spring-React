import { getInvoice } from "./services/getInvoice";

function App() {
  const { id, name: invoiceName, client, company, items } = getInvoice();
  const { name: clientName, lastname, address } = client;
  const { country, city, street, number } = address;
  const { name: companyName, fiscalNumber } = company;
  return (
    <>
      <h1>Ejemplo Factura</h1>
      <ul>
        <li>Id: {id}</li>
        <li>Nombre: {invoiceName}</li>
      </ul>

      <h3>Datos del cliente:</h3>
      <ul>
        <li>
          Nombre: {clientName} {lastname}
        </li>
        <li>
          Dirección: {country}, {city}, {street + " " + number}
        </li>
      </ul>

      <h3>Datos de la empresa:</h3>
      <ul>
        <li>{companyName}</li>
        <li>{fiscalNumber}</li>
      </ul>
    </>
  );
}

export default App;
