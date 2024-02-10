import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

export const App = () => {
  const initialUsers = [
    {
      id: 1,
      username: "rey",
      password: "1234",
      email: "rey@correo.com",
    },
  ];

  return (
    <div className="container my-4">
      <h1 className="text-center">Login App</h1>
      <div className="row">
        <div className="col">
          <UserForm />
        </div>
        <div className="col">
          <UsersList users={initialUsers} />
        </div>
      </div>
    </div>
  );
};
