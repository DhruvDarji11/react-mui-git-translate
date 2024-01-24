/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Checkbox, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonComponent as Btn } from "../../atoms/Button";
import { useDispatch } from "../../../redux/store";
import { setUserState } from "../../../redux/slice/persist";

const LoginForm = () => {
  const [loginUser, setLoginUser] = useState({
    name: "",
    password: "",
  });
  const dispatch = useDispatch();
  const LoginUser = () => {
    if (loginUser.name.length && loginUser.password.length) {
      dispatch(setUserState({ isActive: true, user: loginUser.name }));
    }
  };
  const handleChange = (event: { target: { name: any; value: any } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginUser((values) => ({ ...values, [name]: value }));
  };
  return (
    <Card
      color="transparent"
      className="m-4 p-4 border w-[30rem]"
      shadow={false}
      placeholder={"Card"}
    >
      <Typography
        children={"Project Submission"}
        placeholder={"Project Submission"}
      />
      <Typography
        children={"Nice to meet you! Enter your details to register."}
        color="deep-orange"
        placeholder={"Project Greetings!"}
        className="mt-1 font-normal"
      ></Typography>
      <Typography variant="h4" children={"Form"} placeholder={undefined} />
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            placeholder={undefined}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="Miller Hail"
            value={loginUser.name}
            name="name"
            onChange={handleChange}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3"
            placeholder={undefined}
          >
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            name="password"
            onChange={handleChange}
            value={loginUser.password}
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
              placeholder={undefined}
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
          crossOrigin={undefined}
        />
        <Typography
          color="gray"
          className="mt-4 text-center font-normal"
          placeholder={undefined}
        >
          Don't have an account?{" "}
          <Link to={"/sign-up"} className="font-medium text-gray-900">
            Sign-up
          </Link>
        </Typography>
        <Btn
          className=""
          onClickFun={LoginUser}
          textValue="Login"
          key="Login"
        />
      </form>
      <div>
        {loginUser.name}
        <br />
        {loginUser.password}
      </div>
    </Card>
  );
};
export default LoginForm;
