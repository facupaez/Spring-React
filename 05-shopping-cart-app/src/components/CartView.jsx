import { useState, useEffect } from "react";
import { totalProducts } from "../services/productService";

export const CartView = ({ handlerDeteleProductCart, items }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(totalProducts(items));
    sessionStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const onDeleteProduct = (id) => {
    handlerDeteleProductCart(id);
  };
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
              <td>
                <button
                  onClick={() => onDeleteProduct(id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="fw-bold">
              ${new Intl.NumberFormat("es-AR").format(total)}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
