import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);
  return (
    <>
      <h3 className="text-center mt-2">Shopping Cart App</h3>
      <div className="row">
        {products.map(({ id, name, description, price }) => (
          <div className="col-4 my-2" key={id}>
            <ProductCardView
              name={name}
              description={description}
              price={price}
            />
          </div>
        ))}
      </div>
    </>
  );
};