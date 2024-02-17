import { invoice } from "../data/invoice";

export const getInvoice = () => {
  //console.log(invoice);

  /* let total = 0; */

  /*  invoice.items.forEach((item) => {
    total = total + item.price * item.quantity;
  }); */
  const total = calculateTotalInvoice(invoice.items);

  // devolvemos una copia de la factura (spread) + el total
  return { ...invoice };
};

export const calculateTotalInvoice = (items = []) => {
  // primero utilizamos map para calcular el total de los precios del arreglo ( precio + cantidad )
  // despues en el reduce sumamos el valor acumulador ( 0 ) + el currentValue ( precio + cantidad ) del map anterior
  // con 0 indicamos el valor inicial del acumulador
  return items.reduce(
    (acc, currentValue) => acc + currentValue.price * currentValue.quantity,
    0
  );
};
