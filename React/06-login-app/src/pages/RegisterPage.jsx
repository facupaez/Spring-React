import React, { useContext, useEffect, useState } from "react";
import { UserForm } from "../components/UserForm";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const RegisterPage = () => {
  const { users = [], initialUserForm } = useContext(UserContext);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const { id } = useParams();

  useEffect(() => {
    const user = users.find((user) => user.id == id) || initialUserForm;
    setUserSelected(user);
  }, [id]);

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col">
          <UserForm userSelected={userSelected} />
        </div>
      </div>
    </div>
  );
};
