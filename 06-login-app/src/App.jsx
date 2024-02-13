import { UserForm } from "./components/UserForm";
import { UserModalForm } from "./components/UserModalForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

export const App = () => {
  const {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerDeleteUser,
    handlerUserSelected,
    handlerOpenForm,
    handlerCloseForm,
  } = useUsers();

  return (
    <>
      {!visibleForm || (
        <UserModalForm
          userSelected={userSelected}
          initialUserForm={initialUserForm}
          handlerAddUser={handlerAddUser}
          handlerCloseForm={handlerCloseForm}
        />
      )}

      <div className="container my-4">
        <h1 className="text-center">Login App</h1>
        <div className="row">
          {/*  {!visibleForm || (
            <div className="col">
              <UserForm
                handlerAddUser={handlerAddUser}
                initialUserForm={initialUserForm}
                userSelected={userSelected}
                handlerCloseForm={handlerCloseForm}
              />
            </div>
          )} */}
          <div className="col">
            {visibleForm || (
              <button
                className="btn btn-primary my-2"
                onClick={handlerOpenForm}
              >
                Nuevo usuario
              </button>
            )}

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
    </>
  );
};
