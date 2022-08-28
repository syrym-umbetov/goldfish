import React, { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../Core/contexts/AuthContext";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";

type LoginProps = {
  setOpenLogin: Dispatch<SetStateAction<boolean>>;
};

const inputStyle = `border-2 border-gray-500 rounded w-[100%] h-10 mt-3 p-2 active:border-red`;

const Login: FC<LoginProps> = ({ setOpenLogin }) => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleForgotPassword, setToggleForgotPassword] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
      setOpenLogin(false);
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  if (toggleLogin) {
    return <SignUp setOpenSignUp={setOpenLogin} />;
  }
  if (toggleForgotPassword) {
    return <ForgotPassword setOpenForgotPassword={setOpenLogin} />;
  }
  return (
    <>
      <div className="font-poppins">
        <div className="flex items-center justify-between">
          <p className="text-2xl">Log In</p>
          <span
            className="color-[#aaa] float-right text-[28px] font-bold hover:text-black hover:cursor-pointer hover:no-underline"
            onClick={() => setOpenLogin((prev: boolean) => !prev)}
          >
            &times;
          </span>
        </div>
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
          <div className="mt-4">
            <label>Password</label>
            <input type="password" className={inputStyle} ref={passwordRef} />
          </div>
          <button
            disabled={loading}
            className="bg-[#F9A43F] hover:brightness-100 brightness-125 rounded-lg h-10 mt-3"
          >
            Log In
          </button>
          <hr className="border-t-2 mt-3 border-gray-500" />
        </form>
        <div className="flex flex-col">
          <button
            className="mt-3 text-center"
            onClick={() => setToggleForgotPassword((prev) => !prev)}
          >
            Forgot the password?
          </button>

          <button
            onClick={() => setToggleLogin((prev) => !prev)}
            className="mt-3 text-center"
          >
            Need an account? Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
