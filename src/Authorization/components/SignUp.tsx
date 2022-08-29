import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import PhoneNumberAuth from "./PhoneNumberAuth";
import { inputStyle } from "../../constants";

type SignUpProps = {
  setOpenSignUp: Dispatch<SetStateAction<boolean>>;
};
const SignUp: FC<SignUpProps> = ({ setOpenSignUp }) => {
  const nameRef = useRef<any>();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const passwordConfirmRef = useRef<any>();
  const { signup, updateName, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toggleSignUpWithPhoneNumber, setToggleSignUpWithPhoneNumber] =
    useState(false);
  const [message, setMessage] = useState("");
  const [toggleSignUp, setToggleSignUp] = useState(false);
  const navigate = useNavigate();
  console.log(currentUser);
  async function handleSubmit(e: any) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);

      setMessage("Successfully signed in!");
      setTimeout(() => {
        navigate("/");
        setOpenSignUp(false);
      }, 3000);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  }
  useEffect(() => {
    updateName(nameRef.current.value);
  }, [currentUser, updateName]);
  if (toggleSignUp) return <Login setOpenLogin={setOpenSignUp} />;
  if (toggleSignUpWithPhoneNumber)
    return <PhoneNumberAuth setOpenSignUp={setOpenSignUp} />;
  return (
    <>
      <div className="font-poppins">
        <div className="flex items-center justify-between">
          <p className="text-2xl">Sign Up</p>
          <span
            className="color-[#aaa] float-right text-[28px] font-bold hover:text-sky-500 hover:cursor-pointer hover:no-underline"
            onClick={() => setOpenSignUp((prev: boolean) => !prev)}
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
            <label>Name</label>
            <input className={inputStyle} ref={nameRef} type="text" required />
          </div>
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
          <div className="mt-4">
            <label>Password Confirmation</label>
            <input
              type="password"
              className={inputStyle}
              ref={passwordConfirmRef}
            />
          </div>
          <button
            disabled={loading}
            className="bg-[#F9A43F] hover:brightness-100 brightness-125 rounded-lg h-10 mt-3"
          >
            Sign Up
          </button>
          <hr className="border-t-2 mt-3 border-gray-500" />

          <button
            onClick={() => setToggleSignUp((prev) => !prev)}
            className="mt-3 text-center hover:decoration-sky-500 hover:underline hover:underline-offset-2"
          >
            Already have an account? Log In
          </button>
          <button
            onClick={() => setToggleSignUpWithPhoneNumber((prev) => !prev)}
            className="mt-3 text-center hover:decoration-sky-500 hover:underline hover:underline-offset-2"
          >
            Login with phone number
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
