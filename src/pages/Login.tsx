import { FC, ReactElement } from "react";
import { isBrowser } from "@contentpi/lib";
//contexts
import UserProvider from "../contexts/users";
//components
import LoginLayout from "../components/users/LoginLayout";

interface IProps {
  currentUrl?: string
}
const Login: FC<IProps> = ({
  currentUrl = isBrowser()
    ? window.location.search.replace("?redirectTo=", "")
    : " ",
}): ReactElement => {
  return (
    <UserProvider page="login">
      <LoginLayout currentUrl={currentUrl} />
    </UserProvider>
  );
};

export default Login;
