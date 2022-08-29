import { FC, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Login from "./Login";
import { ConfirmationResult } from "firebase/auth";
import { PhoneNumberProps } from "../types/props";

const inputStyle = `border-2 border-gray-500 rounded w-[100%] h-10 mt-3 p-2 active:border-red`;

const PhoneNumberAuth: FC<PhoneNumberProps> = ({ setOpenSignUp }) => {
  const phoneNumberRef = useRef<any>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [expand, setExpand] = useState(false);
  const [verificationId, setverificationId] = useState<ConfirmationResult>();
  const [toggleSignUpWithPhoneNumber, setToggleSignUpWithPhoneNumber] =
    useState(false);
  const { verifyPhoneNumber } = useAuth();

  const [code, setCode] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      setverificationId(await verifyPhoneNumber(phoneNumberRef.current.value));
      setExpand(true);
      setMessage("SMS code sent");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  }

  const validateSMS = () => {
    setMessage("");
    verificationId
      ?.confirm(code)
      .then((_) => {
        setMessage("Successfull login!");
        setTimeout(() => {
          setOpenSignUp(false);
        }, 3000);
      })
      .catch(() => {
        setMessage("");
        setError("Failed to authenticate with phone number");
      });
  };

  if (toggleSignUpWithPhoneNumber)
    return <Login setOpenLogin={setOpenSignUp} />;
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
            <label>Sign Up with Phone Number</label>
            <input
              className={inputStyle}
              ref={phoneNumberRef}
              type="tel"
              required
            />
          </div>

          {!expand && (
            <button
              disabled={loading}
              className="bg-[#F9A43F] hover:brightness-100 brightness-125 rounded-lg h-10 mt-3"
            >
              Sign Up with Phone Number
            </button>
          )}
        </form>

        {expand && (
          <>
            <div className="mt-4">
              <label>Verification Code</label>
              <input
                type="text"
                className={inputStyle}
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>

            <button
              onClick={validateSMS}
              className="bg-[#F9A43F] hover:brightness-100 brightness-125 rounded-lg h-10 mt-3 w-[100%]"
            >
              Confirm
            </button>
          </>
        )}

        <hr className="border-t-2 mt-3 border-gray-500" />
        <div id="recaptcha-container"></div>
        <div className="text-center">
          <button
            onClick={() => setToggleSignUpWithPhoneNumber((prev) => !prev)}
            className="mt-3 hover:decoration-sky-500 hover:underline hover:underline-offset-2"
          >
            Already have an account? Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default PhoneNumberAuth;
