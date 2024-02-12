import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

export const App = () => {
  const {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerDeleteUser,
    handlerUserSelected,
  } = useUsers();

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
