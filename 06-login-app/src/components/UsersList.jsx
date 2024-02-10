import { UserRow } from "./UserRow";

export const UsersList = ({ users = [] }) => {
  return (
    <div>
      <h3>Lista de usuarios</h3>
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
          {users.map(({ id, username, email }) => (
            <UserRow user={id} username={username} email={email} key={id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
