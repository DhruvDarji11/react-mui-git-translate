import React from "react";
import LoginForm from "../../components/molecules/Project/LoginForm";
import { loginPage } from "../../utils/constant";
const LoginPage = () => {
  return (
    <div className="p-10 mx-auto">
      <h2 className="Main-Page">{loginPage.title}</h2>
      <br />
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
