import { itemsReducer } from "../reducers/itemsReducer";
import { useReducer, useEffect } from "react";
import {
  ADD_PRODUCT_CART,
  DETELE_PRODUCT_CART,
  UPDATE_QUANTITY_PRODUCT_CART,
} from "../reducers/itemsAction";

export const useItemsCart = () => {
  const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

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
  return {
    cartItems,
    handlerAddProductCart,
    handlerDeteleProductCart,
  };
};
