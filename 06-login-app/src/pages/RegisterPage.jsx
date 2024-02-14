import React, { useState } from "react";
import { UserForm } from "../components/UserForm";

export const RegisterPage = ({ handlerAddUser, initialUserForm }) => {
  const [userSelected, setUserSelected] = useState(initialUserForm);
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col">
          <UserForm
            userSelected={userSelected}
            handlerAddUser={handlerAddUser}
            initialUserForm={initialUserForm}
          />
        </div>
      </div>
    </div>
  );
};
