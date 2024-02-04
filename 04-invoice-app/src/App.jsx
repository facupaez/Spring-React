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

  // states para guardar datos product, price, quantity
  const [productValue, setProductValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");

  // state para guardar y agregar nuevos items
  const [items, setItems] = useState(itemsInitial);

  // contador para incrementador automatico de id
  const [counter, setCounter] = useState(4);

  const onProductChange = ({ target }) => {
    //console.log(target.value);
    setProductValue(target.value);
  };

  const onPriceChange = ({ target }) => {
    //console.log(target.value);
    setPriceValue(target.value);
  };

  const onQuantityChange = ({ target }) => {
    //console.log(target.value);
    setQuantityValue(target.value);
  };

  const onInvoiceItemSubmit = (event) => {
    event.preventDefault();

    // validacion de campos en blanco
    if (productValue.length <= 1) {
      alert("Debe llenar el campo Producto");
      return;
    }
    if (quantityValue.trim().length < 1 || isNaN(quantityValue)) {
      alert("Debe llenar el campo cantidad con números");
      return;
    }
    if (priceValue.length <= 1 || isNaN(priceValue)) {
      alert("Debe llenar el campo precio con números");
      return;
    }

    setItems([
      ...items,
      {
        id: counter,
        product: productValue.trim(),
        price: parseFloat(priceValue.trim(), 10),
        quantity: parseInt(quantityValue.trim(), 10),
      },
    ]);
    setProductValue("");
    setPriceValue("");
    setQuantityValue("");
    setCounter(counter + 1);
  };
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

            <form className="w-50" onSubmit={onInvoiceItemSubmit}>
              <input
                type="text"
                name="product"
                value={productValue}
                placeholder="Nombre"
                className="form-control m-3"
                onChange={(event) => onProductChange(event)}
              />
              <input
                type="text"
                name="price"
                value={priceValue}
                placeholder="Precio"
                className="form-control m-3"
                onChange={onPriceChange}
              />
              <input
                type="text"
                name="quantity"
                value={quantityValue}
                placeholder="Cantidad"
                className="form-control m-3"
                onChange={onQuantityChange}
              />
              <button type="submit" className="btn btn-primary m-3">
                Nuevo item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
