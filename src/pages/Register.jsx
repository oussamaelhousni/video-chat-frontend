import React, { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import { TextInput, Button } from "../components";
import image from "../assets/AI_Generated_Image.jpeg";

import { RotatingLines } from "react-loader-spinner";
const Register = () => {
  const [isShowed, setIsShowed] = useState(false);
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const register = (registerData) =>
    axios.post(
      import.meta.env.VITE_URL + "/api/v1/auth/register",
      registerData
    );
  const { mutate, isError, error, isSuccess, isPending } = useMutation({
    mutationFn: register,
  });

  const onChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const show = () => {
    setIsShowed(true);
    setTimeout(() => {
      setIsShowed(false);
    }, 5000);
  };
  useEffect(() => {
    console.log(registerData);
  }, [registerData]);
  const onSubmit = async (e) => {
    e.preventDefault();
    mutate(registerData, {
      onError: show,
      onSuccess: show,
    });
  };
  return (
    <div className="flex items-center  w-screen h-screen relative">
      <button className="absolute text-gray-700 lg:text-white top-4 left-4 sm:top-8 sm:left-8 text-2xl font-bold w-[3rem] h-[3rem] rounded-full hover:bg-secondary hover:text-white flex items-center justify-center hover:bg-opacity-80 transition-all duration-200">
        <VscArrowLeft />
      </button>
      <div className="h-full w-full bg-secondary hidden lg:flex items-center justify-center basis-5/12">
        <img
          src={image}
          alt="logo"
          className="w-[25vh] aspect-square mix-blend-multiply"
        />
      </div>
      <div className="grow basis-7/12 flex items-center justify-center">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-y-8 w-full mx-6 sm:w-min-[40rem] sm:w-[25rem] "
        >
          <h1 className="text-4xl font-ubuntu uppercase">Register</h1>

          {isError && isShowed && (
            <div className="bg-red-600 px-8 py-4 w-full text-md text-white">
              {error.response.data.message}
            </div>
          )}

          {isSuccess && isShowed && (
            <div className="bg-green-600 px-8 py-4 w-full text-md text-white ring-2 text-center">
              User created successfully, please check your email for account
              confirmation
            </div>
          )}
          <TextInput
            name="fullName"
            placeholder="Enter your full name"
            label="fullName"
            value={registerData.fullName}
            onChange={onChange}
            className="w-full"
          />
          <TextInput
            name="email"
            placeholder="Enter your email"
            label="email"
            value={registerData.email}
            onChange={onChange}
            className="w-full"
          />
          <TextInput
            name="password"
            placeholder="Enter your password"
            label="password"
            value={registerData.password}
            onChange={onChange}
            className="w-full"
            eye
          />
          <TextInput
            name="passwordConfirm"
            eye
            placeholder="Confirm your password"
            label="password Confirm"
            value={registerData.passwordConfirm}
            onChange={onChange}
            className="w-full"
          />

          <div className="w-full">
            <Button className={"w-full"} type={"submit"}>
              <span className="flex items-center gap-2 justify-center">
                Sign in{" "}
                {!isPending && <VscArrowRight className="inline-flex" />}{" "}
                {isPending && (
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
          </div>
          <Button className="w-full !bg-secondary !hover:bg-red uppercase font-ubuntu">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
