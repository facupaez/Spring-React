import { useContext, useEffect } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { UserContext } from "../context/UserContext";

export const UsersPage = () => {
  const { users, visibleForm, handlerOpenForm, getUsers } =
    useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      {!visibleForm || <UserModalForm />}
      <div className="container my-4">
        <h1 className="text-center">Login App</h1>
        <div className="row">
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
              <UsersList />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
