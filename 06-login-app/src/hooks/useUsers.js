import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

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

    Swal.fire({
      title:
        user.id === 0
          ? "Usuario creado con éxito"
          : "Usuario actualizado con éxito",
      icon: "success",
    });
  };

  const handlerDeleteUser = (id) => {
    Swal.fire({
      title: "Estás seguro que desea eliminar?",
      text: "El usuario será eliminado permanentemente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "deleteUser",
          payload: id,
        });
        Swal.fire({
          title: "Usuario eliminado con éxito!",
          icon: "success",
        });
      }
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
