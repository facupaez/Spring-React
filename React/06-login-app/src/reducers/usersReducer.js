export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "addUser":
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    case "deleteUser":
      return state.filter((user) => user.id !== action.payload);
    case "updateUser":
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...action.payload,
            password: user.password,
          };
        }
        return user;
      });
    case "findAllUsers":
      return action.payload;
    default:
      return state;
  }
};
