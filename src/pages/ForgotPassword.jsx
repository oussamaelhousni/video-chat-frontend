import React from "react";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import { TextInput, Button } from "../components";
import image from "../assets/AI_Generated_Image.jpeg";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate();
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
          action=""
          className="flex flex-col gap-y-8 w-full mx-6 sm:w-min-[40rem] sm:w-[25rem] "
        >
          <h1 className="text-4xl font-ubuntu uppercase">Forgot password</h1>
          <TextInput
            placeholder="Enter your email"
            label="email"
            onChange={console.log}
            className="w-full"
          />

          <div className="w-full">
            <Button className="shadow-sm shadow-gray-400">
              <span className="items-center flex gap-2">
                Next <VscArrowRight className="inline-flex font-bold text-lg" />
              </span>
            </Button>
          </div>
          <Button
            className="w-full !bg-secondary !hover:bg-red uppercase font-ubuntu shadow-sm text-center"
            onClick={() => navigate("/login")}
          >
            <span className="flex items-center justify-center gap-2">
              <VscArrowLeft className="inline-flex text-xl" />
              Back to login
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
