import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";

import Button from "../components/Button";
const ConfirmAccount = ({}) => {
  const navigate = useNavigate();
  const params = useParams();
  const confirmAccount = () => {
    return axios.get(
      `${import.meta.env.VITE_URL}/api/v1/auth/confirm/${params.userId}/${
        params.emailCodeConfirmation
      }`
    );
  };
  const { data, status, error } = useQuery({
    queryKey: ["confirmAccount"],
    queryFn: confirmAccount,
  });

  useEffect(() => {
    if (status === "success") setTimeout(() => navigate("/login"), 5000);
  }, [status]);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        {status === "pending" && (
          <p className="flex items-center gap-4 text-3xl flex-col sm:flex-row">
            <span>We are Confirming Your Account</span>{" "}
            <RotatingLines
              className="text-secondary inline-flex"
              strokeColor="rgb(47,54,64)"
              strokeWidth="5"
              animationDuration="0.7"
              width="50"
              visible={true}
            />
          </p>
        )}

        {status === "seccues" && (
          <p className="flex items-center gap-4 text-3xl text-red-700">
            {error.response.data.message}
          </p>
        )}

        {status === "error" && (
          <p className="flex items-center gap-4 text-3xl">
            <span>Your account now is confirmed </span>
            <Button
              className={
                "bg-green-700 hover:bg-green-900 py-2 flex items-center gap-3"
              }
              onClick={() => navigate("/login")}
            >
              <span>to Login</span>
              <VscArrowRight className="inline-flex text-[1rem]" />{" "}
            </Button>
          </p>
        )}
      </div>
    </div>
  );
};

export default ConfirmAccount;
