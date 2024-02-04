import { useEffect, useState } from "react";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ProductsView } from "./components/ProductsView";
import { TotalView } from "./components/TotalView";
import { calculateTotalInvoice, getInvoice } from "./services/getInvoice";
import { FormView } from "./components/FormView";

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastname: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: "",
  },
  items: [],
};

function App() {
  // useState para traer los datos de la factura una sola vez con useEffect mas abajo
  const [invoice, setInvoice] = useState(invoiceInitial);

  // desesctructuracion del objeto invoice
  const { id, name: invoiceName, client, company } = invoice;

  // state para guardar y agregar nuevos items
  const [items, setItems] = useState([]);

  // contador para incrementador automatico de id
  const [counter, setCounter] = useState(4);

  const [totalInvoice, setTotalInvoice] = useState(0);

  // traemos una sola vez el objeto invoice
  // traemos una sola vez el array items
  useEffect(() => {
    const invoiceData = getInvoice();
    console.log(invoiceData);
    setInvoice(invoiceData);
    setItems(invoiceData.items);
  }, []);

  const handlerAddItem = ({ product, price, quantity }) => {
    // hacemos copia del array items y agregamos nuevo item
    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: parseFloat(price.trim(), 10),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);

    // auto incrementar id cuando enviamos form
    setCounter(counter + 1);
  };

  // hacemos cambios cada vez que se agrega un item
  useEffect(() => {
    setTotalInvoice(calculateTotalInvoice(items));
  }, [items]);

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
            <TotalView totalInvoice={totalInvoice} />

            <FormView handler={(newItem) => handlerAddItem(newItem)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
