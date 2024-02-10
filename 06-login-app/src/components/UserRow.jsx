import React from "react";

export const UserRow = ({ id, username, email }) => {
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
        <button type="button" className="btn btn-danger btn-sm">
          Eliminar
        </button>
      </td>
    </tr>
  );
};
