import { useReducer, useEffect } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { itemsReducer } from "./reducers/itemsReducer";
import {
  ADD_PRODUCT_CART,
  DETELE_PRODUCT_CART,
  UPDATE_QUANTITY_PRODUCT_CART,
} from "./reducers/itemsAction";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

function App() {
  // useReducer
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((item) => item.product.id === product.id);

    if (hasItem) {
      dispatch({
        type: UPDATE_QUANTITY_PRODUCT_CART,
        payload: product,
      });
    } else {
      dispatch({
        type: ADD_PRODUCT_CART,
        payload: product,
      });
    }
  };

  const handlerDeteleProductCart = (id) => {
    dispatch({
      type: DETELE_PRODUCT_CART,
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
