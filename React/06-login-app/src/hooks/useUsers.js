import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  deleteUser,
  findAllUsers,
  saveUser,
  updateUser,
} from "../services/userService";

const initialUsers = JSON.parse(sessionStorage.getItem("userList")) || [];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

const initialErrors = {
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const navigate = useNavigate();

  const handlerAddUser = async (user) => {
    let response;
    try {
      if (user.id === 0) {
        response = await saveUser(user);
      } else {
        response = await updateUser(user);
      }

      dispatch({
        type: user.id === 0 ? "addUser" : "updateUser",
        payload: response.data,
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
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors(error.response.data);
      } else {
        throw error;
      }
    }
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
        deleteUser(id);
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
    setErrors({});
  };

  const getUsers = async () => {
    const result = await findAllUsers();
    dispatch({
      type: "findAllUsers",
      payload: result.data,
    });
  };

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    errors,
    handlerAddUser,
    handlerDeleteUser,
    handlerUserSelected,
    handlerOpenForm,
    handlerCloseForm,
    getUsers,
  };
};
