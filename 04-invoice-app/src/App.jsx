import { useState } from "react";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ProductsView } from "./components/ProductsView";
import { TotalView } from "./components/TotalView";
import { getInvoice } from "./services/getInvoice";

function App() {
  const {
    id,
    name: invoiceName,
    client,
    company,
    items: itemsInitial,
    total,
  } = getInvoice();

  const [productValue, setProductValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");
  const [items, setItems] = useState(itemsInitial);

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

            <form
              className="w-50"
              onSubmit={(event) => {
                event.preventDefault();
                setItems([
                  ...items,
                  {
                    id: 4,
                    product: productValue,
                    price: parseFloat(priceValue, 10),
                    quantity: parseInt(quantityValue, 10),
                  },
                ]);
                setProductValue("");
                setPriceValue("");
                setQuantityValue("");
              }}
            >
              <input
                type="text"
                name="product"
                value={productValue}
                placeholder="Nombre"
                className="form-control m-3"
                onChange={(event) => {
                  console.log(event.target.value);
                  setProductValue(event.target.value);
                }}
              />
              <input
                type="text"
                name="price"
                value={priceValue}
                placeholder="Precio"
                className="form-control m-3"
                onChange={(event) => {
                  console.log(event.target.value);
                  setPriceValue(event.target.value);
                }}
              />
              <input
                type="text"
                name="quantity"
                value={quantityValue}
                placeholder="Cantidad"
                className="form-control m-3"
                onChange={(event) => {
                  console.log(event.target.value);
                  setQuantityValue(event.target.value);
                }}
              />
              <button type="submit" className="btn btn-primary">
                Crear item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
