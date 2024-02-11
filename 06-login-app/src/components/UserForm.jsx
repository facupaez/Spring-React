import { useState } from "react";

const initialUserForm = {
  username: "",
  password: "",
  email: "",
};

export const UserForm = () => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { username, password, email } = userForm;

  const onInputChange = ({ target }) => {
    //console.log(target.value);
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || !password || !email) {
      alert("Debe completar todos los campos del formulario");
      return;
    }
    console.log(userForm);

    // guardar user form en el listado de usuarios
    setUserForm(initialUserForm);
  };
  return (
    <div>
      <h3>Formulario de usuarios</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control my-3 w-75"
          placeholder="Usuario"
          name="username"
          onChange={onInputChange}
          value={username}
        />
        <input
          type="password"
          className="form-control my-3 w-75"
          placeholder="Contraseña"
          name="password"
          onChange={onInputChange}
          value={password}
        />
        <input
          type="text"
          className="form-control my-3 w-75"
          placeholder="Email"
          name="email"
          onChange={onInputChange}
          value={email}
        />
        <button className="btn btn-success" type="submit">
          Crear usuario
        </button>
      </form>
    </div>
  );
};
