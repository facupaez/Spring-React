import React from "react";

export const UserRow = ({ handlerDeleteUser, id, username, email }) => {
  const onDeleteUser = (id) => {
    handlerDeleteUser(id);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button type="button" className="btn btn-primary btn-sm">
          Modificar
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => onDeleteUser(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
