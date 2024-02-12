import { UserRow } from "./UserRow";

export const UsersList = ({
  handlerDeleteUser,
  handlerUserSelected,
  users = [],
}) => {
  return (
    <div>
      <table className="table table-hover table-strippedd">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, username, email, password }) => (
            <UserRow
              id={id}
              username={username}
              email={email}
              password={password}
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
