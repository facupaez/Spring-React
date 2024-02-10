import { useReducer, useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { itemsReducer } from "./reducers/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

function App() {
  // useReducer
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((item) => item.product.id === product.id);

    if (hasItem) {
      dispatch({
        type: "updateQuantityProductCart",
        payload: product,
      });
    } else {
      dispatch({
        type: "addProductCart",
        payload: product,
      });
    }
  };

  const handlerDeteleProductCart = (id) => {
    dispatch({
      type: "deleteProductCart",
      payload: id,
    });
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
