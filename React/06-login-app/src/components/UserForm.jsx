import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForm = ({ handlerCloseForm, userSelected }) => {
  const { initialUserForm, handlerAddUser, errors } = useContext(UserContext);
  const [userForm, setUserForm] = useState(initialUserForm);
  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm({ ...userSelected, password: "" });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // validaciones
    /*  if (!username || (!password && id === 0) || !email) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Debe completar todos los campos del formulario!",
      });
      return;
    }

    if (!email.includes("@")) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "El email debe ser válido",
      });
      return;
    } */

    // guardar user form en el listado de usuarios
    handlerAddUser(userForm);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUserForm);
  };
  return (
    <div>
      <h3>{id > 1 ? "Edición de usuario" : "Registro de usuario"}</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control my-3 w-75"
          placeholder="Usuario"
          name="username"
          onChange={onInputChange}
          value={username}
        />
        <p className="text-danger">{errors?.username}</p>
        {id > 0 || (
          <input
            type="password"
            className="form-control my-3 w-75"
            placeholder="Contraseña"
            name="password"
            onChange={onInputChange}
            value={password}
          />
        )}
        <p className="text-danger">{errors?.password}</p>
        <input
          type="text"
          className="form-control my-3 w-75"
          placeholder="Email"
          name="email"
          onChange={onInputChange}
          value={email}
        />
        <p className="text-danger">{errors?.email}</p>

        <input type="hidden" name="id" value={id} />
        <button className="btn btn-success" type="submit">
          {id > 0 ? "Modificar usuario" : "Crear usuario"}
        </button>
        {!handlerCloseForm || (
          <button
            className="btn btn-danger mx-2"
            type="button"
            onClick={() => onCloseForm()}
          >
            Cerrar
          </button>
        )}
      </form>
    </div>
  );
};
