/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import { setUserState } from "../../redux/slice/persist";
// import { useDispatch } from "../../redux/store";
// import { ButtonComponent as Btn } from "../../components/atoms/Button";
import LoginForm from "../../components/molecules/Project/LoginForm";
import { loginPage } from "../../utils/constant";
const LoginPage = () => {
  return (
    <div className="p-10 m-auto">
      <h2 className="Main-Page m-auto">{loginPage.title}</h2>
      <br />
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
