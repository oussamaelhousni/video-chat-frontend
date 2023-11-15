import React from "react";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import { TextInput, Button } from "../components";
import image from "../assets/AI_Generated_Image.jpeg";

const Register = () => {
  return (
    <div className="flex items-center  w-screen h-screen relative">
      <button className="absolute text-white top-4 left-4 sm:top-8 sm:left-8 text-2xl font-bold w-[3rem] h-[3rem] rounded-full hover:bg-secondary hover:text-white flex items-center justify-center hover:bg-opacity-80 transition-all duration-200">
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
          action=""
          className="flex flex-col gap-y-8 w-full mx-6 sm:w-min-[40rem] sm:w-[25rem] "
        >
          <h1 className="text-4xl font-ubuntu uppercase">Register</h1>
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
          <div className="w-full">
            <Button className={"w-full"}>
              <span>
                Sign in <VscArrowRight className="inline-flex" />
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
