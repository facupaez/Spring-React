import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const UserRow = ({ id, username, email }) => {
  const { handlerDeleteUser, handlerUserSelected } = useContext(UserContext);
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() =>
            handlerUserSelected({
              id,
              username,
              email,
            })
          }
        >
          Modificar
        </button>
      </td>
      <td>
        <NavLink className={"btn btn-primary btn-sm"} to={"/users/edit/" + id}>
          Modificar route
        </NavLink>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => handlerDeleteUser(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
