import { useEffect, useState } from "react";

export const UserForm = ({ handlerAddUser, initialUserForm, userSelected }) => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm({ ...userSelected, password: "" });
  }, [userSelected]);

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
    if (!username || (!password && id === 0) || !email) {
      alert("Debe completar todos los campos del formulario");
      return;
    }

    // guardar user form en el listado de usuarios
    handlerAddUser(userForm);
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

        <input
          type="text"
          className="form-control my-3 w-75"
          placeholder="Email"
          name="email"
          onChange={onInputChange}
          value={email}
        />
        <input type="hidden" name="id" value={id} />
        <button className="btn btn-success" type="submit">
          {id > 0 ? "Modificar usuario" : "Crear usuario"}
        </button>
      </form>
    </div>
  );
};
