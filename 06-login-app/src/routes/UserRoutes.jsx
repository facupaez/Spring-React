import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { UserNavbar } from "../components/layout/UserNavbar";
import { RegisterPage } from "../pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";

export const UserRoutes = ({ login, handlerLogout }) => {
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
      <UserNavbar login={login} handlerLogout={handlerLogout} />
      <Routes>
        <Route
          path="users"
          element={
            <UsersPage
              users={users}
              userSelected={userSelected}
              initialUserForm={initialUserForm}
              visibleForm={visibleForm}
              handlerAddUser={handlerAddUser}
              handlerDeleteUser={handlerDeleteUser}
              handlerUserSelected={handlerUserSelected}
              handlerOpenForm={handlerOpenForm}
              handlerCloseForm={handlerCloseForm}
            />
          }
        />
        <Route
          path="users/register"
          element={
            <RegisterPage
              handlerAddUser={handlerAddUser}
              initialUserForm={initialUserForm}
            />
          }
        />
        <Route path="/" element={<Navigate to={"/users"} />} />
      </Routes>
    </>
  );
};
