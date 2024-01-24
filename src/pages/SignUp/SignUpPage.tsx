import React from "react";
import { signupPage } from "../../utils/constant";
import NoContentFound from "../../assets/images/NoResultFound.svg";
const SignUpPage = () => {
  return (
    <div className="text-center my-10">
      <div>{signupPage.title}</div>
      <img
        className="m-auto my-5"
        src={NoContentFound}
        alt="No Content found"
      />
    </div>
  );
};

export default SignUpPage;
