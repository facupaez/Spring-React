export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case "addProductCart":
      return [
        ...state,
        {
          product: action.payload,
          quantity: 1,
        },
      ];
    case "updateQuantityProductCart":
      return state.map((item) => {
        if (item.product.id === action.payload.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
    case "deleteProductCart":
      return [...state.filter((item) => item.product.id !== action.payload.id)];
    default:
      return state;
  }
};
