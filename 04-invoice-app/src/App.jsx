import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ProductsView } from "./components/ProductsView";
import { TotalView } from "./components/TotalView";
import { getInvoice } from "./services/getInvoice";

function App() {
  const { id, name: invoiceName, client, company, items, total } = getInvoice();

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">
            <h1>Ejemplo Factura</h1>
          </div>
          <div className="card-body">
            <InvoiceView id={id} invoiceName={invoiceName} />
            <div className="row my-3">
              <div className="col">
                <ClientView title={"Datos del cliente:"} client={client} />
              </div>
              <div className="col">
                <CompanyView title={"Datos de la empresa:"} company={company} />
              </div>
            </div>

            <ProductsView title={"Detalle de productos:"} items={items} />
            <TotalView total={total} />

            <form>
              <input
                type="text"
                name="product"
                placeholder="Nombre"
                className="form-control m-3"
                onChange={(event) => console.log(event.target.value)}
              />
              <input
                type="text"
                name="price"
                placeholder="Precio"
                className="form-control m-3"
                onChange={(event) => console.log(event.target.value)}
              />
              <input
                type="text"
                name="quantity"
                placeholder="Cantidad"
                className="form-control m-3"
                onChange={(event) => console.log(event.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
