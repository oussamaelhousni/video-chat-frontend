import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";
import { confirmAccount, initState } from "../app/slices/authSlice";

import Button from "../components/Button";
const ConfirmAccount = () => {
  const { status, successMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    dispatch(initState());
  }, []);

  useEffect(() => {
    const id = setTimeout(
      () =>
        dispatch(
          confirmAccount({
            id: params.userId,
            emailConfirmationCode: params.emailCodeConfirmation,
          })
        ),
      5000
    );
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        {status === "idle" && (
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

        {status === "error" && (
          <p className="flex items-center gap-4 flex-col text-3xl text-red-700">
            You confirmation is invalid or it expires 📛
            <br />
            <Button
              className={"bg-red-500 hover:bg-red-700"}
              onClick={() => navigate("/login")}
            >
              Back to login
            </Button>
          </p>
        )}

        {status === "success" && (
          <p className="flex items-center flex-col gap-4 text-3xl">
            <span>{successMessage}🙆‍♂️</span>
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
