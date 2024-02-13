import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { UserNavbar } from "./components/layout/UserNavbar";
import { useLogin } from "./hooks/useLogin";

export const App = () => {
  const { login, handlerLogin, handlerLogout } = useLogin();
  return (
    <>
      {login.isAuth ? (
        <>
          <UserNavbar login={login} handlerLogout={handlerLogout} />
          <UsersPage />
        </>
      ) : (
        <LoginPage handlerLogin={handlerLogin} />
      )}
    </>
  );
};
