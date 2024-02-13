import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const initialUsers = JSON.parse(sessionStorage.getItem("userList")) || [];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};
export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);
  const navigate = useNavigate();

  const handlerAddUser = (user) => {
    dispatch({
      type: user.id === 0 ? "addUser" : "updateUser",
      payload: user,
    });

    Swal.fire({
      title:
        user.id === 0
          ? "Usuario creado con éxito"
          : "Usuario actualizado con éxito",
      icon: "success",
    });
    handlerCloseForm();
    navigate("/users");
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
    setUserSelected(initialUserForm);
  };

  const handlerUserSelected = (user) => {
    setUserSelected({ ...user });
    setVisibleForm(true);
  };

  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setUserSelected(initialUserForm);
  };

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerDeleteUser,
    handlerUserSelected,
    handlerOpenForm,
    handlerCloseForm,
  };
};
