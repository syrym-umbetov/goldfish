import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { AuthContextType, AuthProviderProps } from "../types/props";

const AuthContext = createContext({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}

const generateRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    { callback: () => {} },
    auth
  );
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function updateName(name: string) {
    if (currentUser) {
      return updateProfile(currentUser, { displayName: name });
    }
  }

  function verifyPhoneNumber(phoneNumber: string) {
    generateRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }
  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    verifyPhoneNumber,
    updateName,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
