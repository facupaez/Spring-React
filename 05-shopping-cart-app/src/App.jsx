import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialCartItems = [];

function App() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((item) => item.product.id === product.id);

    if (hasItem) {
      // verificar si ya hay un producto agregado con filter
      /*setCartItems([
        ...cartItems.filter((item) => item.product.id !== product.id),
        {
          product: product,
          quantity: hasItem.quantity + 1,
        },
      ]); */

      // verificar si ya hay un producto agregado con map
      setCartItems(
        cartItems.map((item) => {
          if (item.product.id === product.id) {
            item.quantity = item.quantity + 1;
          }
          return item;
        })
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          product: product,
          quantity: 1,
        },
      ]);
    }
  };

  const handlerDeteleProductCart = (id) => {
    setCartItems([...cartItems.filter((item) => item.product.id !== id)]);
  };

  return (
    <>
      <div className="container">
        <CatalogView handlerAddProductCart={handlerAddProductCart} />

        {cartItems.length <= 0 || (
          <CartView
            items={cartItems}
            handlerDeteleProductCart={handlerDeteleProductCart}
          />
        )}
        <div className="my-4 w-50"></div>
      </div>
    </>
  );
}

export default App;
