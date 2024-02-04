import React, { useState } from "react";

export const FormView = ({ handler }) => {
  // useState del formulario con varios states anidados para guardar sus estados
  const [formItems, setFormItems] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  // desestructuramos array items
  const { product, price, quantity } = formItems;

  // funcion para inputs del form
  const onInputsChange = ({ target: { name, value } }) => {
    //console.log(name);
    //console.log(value);
    setFormItems({
      ...formItems,
      [name]: value,
    });
  };

  // funcion para submit del form
  const onInvoiceItemSubmit = (event) => {
    event.preventDefault();

    // validacion de campos en blanco
    if (product.length <= 1) {
      alert("Debe llenar el campo Producto");
      return;
    }
    if (price.length <= 1 || isNaN(price)) {
      alert("Debe llenar el campo precio con números");
      return;
    }
    if (quantity.trim().length < 1 || isNaN(quantity)) {
      alert("Debe llenar el campo cantidad con números");
      return;
    }

    // enviamos props por funcion handler al padre App, donde lo recibimos en el componente de form
    handler(formItems);

    // resetear campos de formulario
    setFormItems({
      product: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
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
    </>
  );
};
