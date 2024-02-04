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
  /*  const [productValue, setProductValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [quantityValue, setQuantityValue] = useState(""); */

  // useState con varios states anidados
  const [formItems, setFormItems] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  // desestructuramos objeto useState
  const { product, price, quantity } = formItems;

  // state para guardar y agregar nuevos items
  const [items, setItems] = useState(itemsInitial);

  // contador para incrementador automatico de id
  const [counter, setCounter] = useState(4);

  const onInputsChange = ({ target: { name, value } }) => {
    console.log(name);
    console.log(value);
    setFormItems({
      ...formItems,
      [name]: value,
    });
  };

  const onInvoiceItemSubmit = (event) => {
    event.preventDefault();

    // validacion de campos en blanco
    if (product.length <= 1) {
      alert("Debe llenar el campo Producto");
      return;
    }
    if (quantity.trim().length < 1 || isNaN(quantity)) {
      alert("Debe llenar el campo cantidad con números");
      return;
    }
    if (price.length <= 1 || isNaN(price)) {
      alert("Debe llenar el campo precio con números");
      return;
    }

    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: parseFloat(price.trim(), 10),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);
    setFormItems({
      product: "",
      price: "",
      quantity: "",
    });
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
                value={product}
                placeholder="Nombre"
                className="form-control m-3"
                onChange={onInputsChange}
              />
              <input
                type="text"
                name="price"
                value={price}
                placeholder="Precio"
                className="form-control m-3"
                onChange={onInputsChange}
              />
              <input
                type="text"
                name="quantity"
                value={quantity}
                placeholder="Cantidad"
                className="form-control m-3"
                onChange={onInputsChange}
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