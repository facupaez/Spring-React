import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

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
export const App = () => {
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

  return (
    <div className="container my-4">
      <h1 className="text-center">Login App</h1>
      <div className="row">
        <div className="col">
          <UserForm
            handlerAddUser={handlerAddUser}
            initialUserForm={initialUserForm}
            userSelected={userSelected}
          />
        </div>
        <div className="col">
          <h3>Lista de usuarios</h3>
          {users.length === 0 ? (
            <div>
              <p className="alert alert-warning text-center">
                No hay usuarios en el sistema
              </p>
            </div>
          ) : (
            <UsersList
              users={users}
              handlerDeleteUser={handlerDeleteUser}
              handlerUserSelected={handlerUserSelected}
            />
          )}
        </div>
      </div>
    </div>
  );
};
