import { useReducer } from "react";
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
  username: "",
  password: "",
  email: "",
};
export const App = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);

  const handlerAddUser = (user) => {
    dispatch({
      type: "addUser",
      payload: user,
    });
  };

  const handlerDeleteUser = (id) => {
    dispatch({
      type: "deleteUser",
      payload: id,
    });
  };

  return (
    <div className="container my-4">
      <h1 className="text-center">Login App</h1>
      <div className="row">
        <div className="col">
          <UserForm
            handlerAddUser={handlerAddUser}
            initialUserForm={initialUserForm}
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
            <UsersList users={users} handlerDeleteUser={handlerDeleteUser} />
          )}
        </div>
      </div>
    </div>
  );
};
