import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";

const initialUsers = [
  {
    id: 1,
    username: "rey",
    password: "1234",
    email: "rey@correo.com",
  },
];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};
export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);

  const handlerAddUser = (user) => {
    let type;

    if (user.id === 0) {
      type = "addUser";
    } else {
      type = "updateUser";
    }
    dispatch({
      type: type,
      payload: user,
    });
  };

  const handlerDeleteUser = (id) => {
    dispatch({
      type: "deleteUser",
      payload: id,
    });
  };

  const handlerUserSelected = (user) => {
    setUserSelected({ ...user });
  };

  return {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerDeleteUser,
    handlerUserSelected,
  };
};
