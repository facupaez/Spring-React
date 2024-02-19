import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ handlerAddProductCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const findAllProducts = async () => {
    const products = await getProducts();
    setProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    findAllProducts();
  }, []);
  return (
    <>
      <h3 className="text-center mt-2">Cart App - Catálogo de productos</h3>
      {isLoading && (
        <div className="alert alert-info text-center">Cargando...</div>
      )}
      <div className="row">
        {products.map(({ id, name, description, price }) => (
          <div className="col-4 my-2" key={id}>
            <ProductCardView
              id={id}
              name={name}
              description={description}
              price={price}
              handlerAddProductCart={handlerAddProductCart}
            />
          </div>
        ))}
      </div>
    </>
  );
};
