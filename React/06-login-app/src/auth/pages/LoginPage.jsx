import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const initialLoginForm = {
  username: "",
  password: "",
};

export const LoginPage = () => {
  const { handlerLogin } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { username, password } = loginForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // validaciones
    if (!username || !password) {
      Swal.fire({
        title: "Error al validar usuario",
        text: "Usuario o contraseña incorrectos.",
        type: "error",
      });
    }

    // impl login
    handlerLogin({ username, password });
    // limpiar formulario
    setLoginForm(initialLoginForm);
  };
  return (
    <div className="modal" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Log in</h5>
          </div>
          <form onSubmit={onSubmit}>
            <div className="modal-body">
              <input
                className="form-control my-3"
                placeholder="Usuario"
                name="username"
                type="text"
                value={username}
                onChange={onInputChange}
              ></input>
              <input
                className="form-control my-3"
                placeholder="Contraseña"
                name="password"
                type="password"
                value={password}
                onChange={onInputChange}
              ></input>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
