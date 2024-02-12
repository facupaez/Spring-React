export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "addUser":
      return [
        ...state,
        {
          ...action.payload,
          id: new Date().getTime(),
        },
      ];
    case "addUser":
      break;
    case "addUser":
      break;

    default:
      return state;
  }
};
