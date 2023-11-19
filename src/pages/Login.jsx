import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import { TextInput, Button } from "../components";
import image from "../assets/AI_Generated_Image.jpeg";
import PageLoading from "./PageLoading";
import { login, initState } from "../app/slices/authSlice.js";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, isSuccess, isLoading, isError, error, successMessage } =
    useSelector((state) => state.auth);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [tokenChecked, setTokenChecked] = useState(false);

  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginData));
  };

  useEffect(() => {
    dispatch(initState());
  }, []);

  useEffect(() => {
    if (token) navigate("/");
    setTokenChecked(true);
  }, [token]);

  if (!tokenChecked) return <PageLoading />;

  return (
    <div className="flex items-center  w-screen h-screen relative">
      <button className="absolute top-4 left-4 sm:top-8 sm:left-8 text-2xl font-bold w-[3rem] h-[3rem] rounded-full hover:bg-secondary hover:text-white flex items-center justify-center hover:bg-opacity-80 transition-all duration-200">
        <VscArrowLeft />
      </button>
      <div className="grow basis-7/12 flex items-center justify-center">
        <form
          className="flex flex-col gap-y-8 w-full mx-6 sm:w-min-[40rem] sm:w-[25rem] "
          onSubmit={onSubmit}
        >
          <h1 className="text-4xl font-ubuntu uppercase">Login</h1>
          {isError && (
            <div className="bg-red-600 px-8 py-4 w-full text-md text-white">
              {error}
            </div>
          )}

          {isSuccess && (
            <div className="bg-green-600 px-8 py-4 w-full text-md text-white ring-2 text-center font-semibold">
              {successMessage}
            </div>
          )}
          <TextInput
            placeholder="Enter your email"
            name="email"
            label="email"
            onChange={onChange}
            className="w-full"
          />
          <TextInput
            placeholder="Enter your password"
            name="password"
            eye
            label="password"
            onChange={onChange}
            className="w-full"
          />
          <div className="flex justify-between items-center">
            <Button type={"submit"}>
              <span className="flex items-center gap-2">
                Sign in
                {!isLoading && <VscArrowRight className="inline-flex" />}{" "}
                {isLoading && (
                  <RotatingLines
                    className="text-white inline-flex"
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.7"
                    width="20"
                    visible={true}
                  />
                )}
              </span>
            </Button>
            <Link
              to="/forgot-password"
              className="font-semibold text-gray-600 text-md hover:text-primary transition-colors duration-200"
            >
              Forget password ?
            </Link>
          </div>
          <Button
            className="w-full !bg-secondary !hover:bg-red uppercase font-ubuntu"
            onClick={() => navigate("/register")}
          >
            create new account
          </Button>
        </form>
      </div>
      <div className="h-full w-full bg-primary hidden lg:flex items-center justify-center basis-5/12">
        <img
          src={image}
          alt="logo"
          className="w-1/2 aspect-square object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
