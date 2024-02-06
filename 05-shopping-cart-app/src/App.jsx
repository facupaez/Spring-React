import { useEffect } from "react";
import { getProducts } from "./services/productService";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <>
      <div className="container">
        <h3 className="text-center mt-2">Shopping Cart App</h3>
        <div className="row">
          {products.map(({ id, name, description, price }) => (
            <div className="col-4 my-2" key={id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">
                    ${new Intl.NumberFormat("es-AR").format(price)}
                  </p>
                  <button className="btn btn-success">Agregar a carrito</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-4 w-50">
          <h3 className="text-center">Carro de compras</h3>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>nombre</td>
                <td>precio</td>
                <td>cantidad</td>
                <td>total</td>
                <td>eliminar</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5" className="fw-bold">
                  Total $123
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
