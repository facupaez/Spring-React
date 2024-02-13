import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { UserNavbar } from "../components/layout/UserNavbar";

export const UserRoutes = ({ login, handlerLogout }) => {
  return (
    <>
      <UserNavbar login={login} handlerLogout={handlerLogout} />
      <Routes>
        <Route path="users" element={<UsersPage />} />
        <Route path="/" element={<Navigate to={"/users"} />} />
      </Routes>
    </>
  );
};
