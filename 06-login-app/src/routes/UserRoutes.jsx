import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { UserNavbar } from "../components/layout/UserNavbar";
import { RegisterPage } from "../pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";
import { UserProvider } from "../context/UserProvider";

export const UserRoutes = ({ login, handlerLogout }) => {
  return (
    <UserProvider>
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
        <Route
          path="users/edit/:id"
          element={
            <RegisterPage
              users={users}
              handlerAddUser={handlerAddUser}
              initialUserForm={initialUserForm}
            />
          }
        />
        <Route path="/" element={<Navigate to={"/users"} />} />
      </Routes>
    </UserProvider>
  );
};
