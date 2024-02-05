function App() {
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-2">Shopping Cart App</h3>
        <div className="row">
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Teclado RGB HyperX</h5>
                <p className="card-text">Teclado mecánico retroiluminado</p>
                <p className="card-text">$1000</p>
                <button className="btn btn-success">Agregar a carrito</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Teclado RGB HyperX</h5>
                <p className="card-text">Teclado mecánico retroiluminado</p>
                <p className="card-text">$1000</p>
                <button className="btn btn-success">Agregar a carrito</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Teclado RGB HyperX</h5>
                <p className="card-text">Teclado mecánico retroiluminado</p>
                <p className="card-text">$1000</p>
                <button className="btn btn-success">Agregar a carrito</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Teclado RGB HyperX</h5>
                <p className="card-text">Teclado mecánico retroiluminado</p>
                <p className="card-text">$1000</p>
                <button className="btn btn-success">Agregar a carrito</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Teclado RGB HyperX</h5>
                <p className="card-text">Teclado mecánico retroiluminado</p>
                <p className="card-text">$1000</p>
                <button className="btn btn-success">Agregar a carrito</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Teclado RGB HyperX</h5>
                <p className="card-text">Teclado mecánico retroiluminado</p>
                <p className="card-text">$1000</p>
                <button className="btn btn-success">Agregar a carrito</button>
              </div>
            </div>
          </div>
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
