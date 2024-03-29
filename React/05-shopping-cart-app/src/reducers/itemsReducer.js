import {
  ADD_PRODUCT_CART,
  DETELE_PRODUCT_CART,
  UPDATE_QUANTITY_PRODUCT_CART,
} from "./itemsAction";

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      return [
        ...state,
        {
          product: action.payload,
          quantity: 1,
        },
      ];
    case UPDATE_QUANTITY_PRODUCT_CART:
      return state.map((item) => {
        if (item.product.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    case DETELE_PRODUCT_CART:
      return state.filter((item) => item.product.id !== action.payload);
    default:
      return state;
  }
};
