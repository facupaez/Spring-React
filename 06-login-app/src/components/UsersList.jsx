import { useEffect } from "react";
import { UserRow } from "./UserRow";

export const UsersList = ({
  handlerDeleteUser,
  handlerUserSelected,
  users = [],
}) => {
  useEffect(() => {
    sessionStorage.setItem("userList", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <table className="table table-hover table-strippedd">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Modificar</th>
            <th>Modificar route</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, username, email }) => (
            <UserRow
              id={id}
              username={username}
              email={email}
              key={id}
              handlerDeleteUser={handlerDeleteUser}
              handlerUserSelected={handlerUserSelected}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
