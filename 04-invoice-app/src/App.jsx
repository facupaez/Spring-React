import { getInvoice } from "./services/getInvoice";

function App() {
  const invoice = getInvoice();
  return (
    <>
      <h1>Ejemplo Factura</h1>
      <ul>
        <li>Id: {invoice.id}</li>
        <li>Name: {invoice.name}</li>
      </ul>
    </>
  );
}

export default App;
