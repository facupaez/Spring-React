import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialCartItems = [];

function App() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handlerAddProductCart = (product) => {
    setCartItems([
      ...cartItems,
      {
        product: product,
        quantity: 1,
        total: product.price * product.quantity,
      },
    ]);
  };
  return (
    <>
      <div className="container">
        <CatalogView handlerAddProductCart={handlerAddProductCart} />

        <div className="my-4 w-50"></div>
        <CartView items={cartItems} />
      </div>
    </>
  );
}

export default App;
