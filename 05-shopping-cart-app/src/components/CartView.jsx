import React from "react";

export const CartView = () => {
  return (
    <>
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
    </>
  );
};
