import React from "react";

export const CartView = ({ items }) => {
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
          {items.map(({ product: { id, name, price }, quantity }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>${new Intl.NumberFormat("es-AR").format(price)}</td>
              <td>{quantity}</td>
              <td>
                ${new Intl.NumberFormat("es-AR").format(price * quantity)}
              </td>
              <td>eliminar</td>
            </tr>
          ))}
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
