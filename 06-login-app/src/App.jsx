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

export const App = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);

  const handlerAddUser = (user) => {
    dispatch({
      type: "addUser",
      payload: user,
    });
  };
  return (
    <div className="container my-4">
      <h1 className="text-center">Login App</h1>
      <div className="row">
        <div className="col">
          <UserForm handlerAddUser={handlerAddUser} />
        </div>
        <div className="col">
          <UsersList users={users} />
        </div>
      </div>
    </div>
  );
};
