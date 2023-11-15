import React from "react";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import { TextInput, Button } from "../components";
import logo from "../assets/logo.jpeg";
import image from "../assets/AI_Generated_Image.jpeg";
const Login = () => {
  return (
    <div className="flex items-center  w-screen h-screen relative">
      <button className="absolute top-4 left-4 sm:top-8 sm:left-8 text-2xl font-bold w-[3rem] h-[3rem] rounded-full hover:bg-secondary hover:text-white flex items-center justify-center hover:bg-opacity-80 transition-all duration-200">
        <VscArrowLeft />
      </button>
      <div className="grow basis-7/12 flex items-center justify-center">
        <form
          action=""
          className="flex flex-col gap-y-8 w-full mx-6 sm:w-min-[40rem] sm:w-[25rem] "
        >
          <h1 className="text-4xl font-ubuntu uppercase">Login</h1>
          <TextInput
            placeholder="Enter your email"
            label="email"
            onChange={console.log}
            className="w-full"
          />
          <TextInput
            placeholder="Enter your password"
            label="password"
            onChange={console.log}
            className="w-full"
          />
          <div className="flex justify-between items-center">
            <Button>
              <span>
                Sign in <VscArrowRight className="inline-flex" />
              </span>
            </Button>
            <a
              href="http://"
              className="font-semibold text-gray-600 text-md hover:text-primary transition-colors duration-200"
            >
              Forget password ?
            </a>
          </div>
          <Button className="w-full !bg-secondary !hover:bg-red uppercase font-ubuntu">
            create new account
          </Button>
        </form>
      </div>
      <div className="h-full w-full bg-primary hidden lg:flex items-center justify-center basis-5/12">
        <img
          src={image}
          alt="logo"
          className="w-[25vh] aspect-square mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default Login;
