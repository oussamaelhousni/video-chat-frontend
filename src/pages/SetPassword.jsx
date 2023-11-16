import React from "react";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import { TextInput, Button } from "../components";
import logo from "../assets/logo.jpeg";
import image from "../assets/AI_Generated_Image.jpeg";
const SetPassword = () => {
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
          <h1 className="text-4xl font-ubuntu uppercase">Set Password</h1>
          <TextInput
            placeholder="Enter new password*"
            label="password"
            onChange={console.log}
            className="w-full"
          />
          <TextInput
            placeholder="Confirm Password*"
            label="confirm Password"
            onChange={console.log}
            className="w-full"
          />
          <div className="flex justify-between items-center">
            <Button className={"w-full"}>reset</Button>
          </div>
          <Button className="w-full !bg-secondary !hover:bg-red uppercase font-ubuntu">
            <span className="flex items-center gap-2 justify-center">
              Back to login <VscArrowLeft className="inline-flex text-xl" />
            </span>
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

export default SetPassword;
