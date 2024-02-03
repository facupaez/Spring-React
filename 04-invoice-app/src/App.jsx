import { getInvoice } from "./services/getInvoice";

function App() {
  const { id, name: invoiceName, client, company, items } = getInvoice();
  const { name: clientName, lastname, address } = client;
  const { country, city, street, number } = address;
  const { name: companyName, fiscalNumber } = company;
  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">
            <h1>Ejemplo Factura</h1>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Id: {id}</li>
              <li className="list-group-item">Nombre: {invoiceName}</li>
            </ul>
            <div className="row my-3">
              <div className="col">
                <h3>Datos del cliente:</h3>
                <ul className="list-group">
                  <li className="list-group-item">
                    Nombre: {clientName} {lastname}
                  </li>
                  <li className="list-group-item">
                    Dirección: {country}, {city}, {street + " " + number}
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3>Datos de la empresa:</h3>
                <ul className="list-group">
                  <li className="list-group-item">Empresa: {companyName}</li>
                  <li className="list-group-item">Teléfono: {fiscalNumber}</li>
                </ul>
              </div>
            </div>

            <h4>Detalle de productos:</h4>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {items.map(({ id, product, price, quantity }) => {
                  return (
                    <tr key={id}>
                      <td>{product}</td>
                      <td>{price}</td>
                      <td>{quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
