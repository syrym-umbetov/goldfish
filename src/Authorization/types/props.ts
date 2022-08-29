import { ConfirmationResult, User, UserCredential } from "firebase/auth";
import { Dispatch, ReactNode, SetStateAction } from "react";
export type ForgotPasswordProps = {
  setOpenForgotPassword: Dispatch<SetStateAction<boolean>>;
};

export type AuthContextType = {
  currentUser: User | null | undefined;
  signup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  verifyPhoneNumber: (phoneNumber: string) => Promise<ConfirmationResult>;
  updateName: (name: string) => Promise<void> | undefined;
};

export type AuthProviderProps = {
  children: ReactNode;
};

export type SignUpProps = {
  setOpenSignUp: Dispatch<SetStateAction<boolean>>;
};

export type PhoneNumberProps = {
  setOpenSignUp: Dispatch<SetStateAction<boolean>>;
};

export type LoginProps = {
  setOpenLogin: Dispatch<SetStateAction<boolean>>;
};
