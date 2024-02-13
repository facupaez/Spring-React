import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { loginReducer } from "./reducers/loginReducer";

const initialLogin = {
  isAuth: false,
  user: undefined,
};

export const App = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);

  const handlerLogin = ({ username, password }) => {
    if (username === "admin" && password === "12345") {
      const user = { username: "admin" };
      dispatch({
        type: "login",
        payload: user,
      });
    } else {
      Swal.fire({
        title: "Error al validar usuario",
        text: "Usuario o contraseña incorrectos.",
        icon: "warning",
      });
    }
  };
  return (
    <>
      {login.isAuth ? <UsersPage /> : <LoginPage handlerLogin={handlerLogin} />}
    </>
  );
};
