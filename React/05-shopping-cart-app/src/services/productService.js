import { products } from "../data/products";

export const getProducts = () => {
  return products;
};

export const totalProducts = (items) => {
  return items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
};
