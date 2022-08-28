import React, { FC, Dispatch, SetStateAction, useState, useRef } from "react";
import Login from "./Login";
import { useAuth } from "./../Core/contexts/AuthContext";

type ForgotPasswordProps = {
  setOpenForgotPassword: Dispatch<SetStateAction<boolean>>;
};

const inputStyle = `border-2 border-gray-500 rounded w-[100%] h-10 mt-3 p-2 active:border-red`;

const ForgotPassword: FC<ForgotPasswordProps> = ({ setOpenForgotPassword }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);

  const emailRef = useRef<any>();
  const { resetPassword } = useAuth();

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions!");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }
  if (toggleLogin) return <Login setOpenLogin={setOpenForgotPassword} />;
  return (
    <>
      <div className="font-poppins">
        <div className="flex items-center justify-between">
          <p className="text-2xl">Password Reset</p>
          <span
            className="color-[#aaa] float-right text-[28px] font-bold hover:text-black hover:cursor-pointer hover:no-underline"
            onClick={() => setOpenForgotPassword((prev: boolean) => !prev)}
          >
            &times;
          </span>
        </div>
        {message && <div className="text-2xl text-green-500">{message}</div>}
        {error && <div className="text-2xl text-red-500">{error}</div>}
        <form
          className="flex justify-center flex-col text-sm"
          onSubmit={handleSubmit}
        >
          <div className="mt-4">
            <label>Email</label>
            <input
              className={inputStyle}
              ref={emailRef}
              type="email"
              required
            />
          </div>
          <button
            disabled={loading}
            className="bg-[#F9A43F] hover:brightness-100 brightness-125 rounded-lg h-10 mt-3"
          >
            Reset Password
          </button>
          <hr className="border-t-2 mt-3 border-gray-500" />
        </form>
        <div className="flex flex-col">
          <button
            onClick={() => setToggleLogin((prev) => !prev)}
            className="mt-3 text-center underline underline-offset-2 hover:text-sky-700 brightness-125 rounded-lg h-10"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
