import React from "react";
import nookies from "nookies";
import {
  onIdTokenChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../utils/firebaseClient";

const authContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const router = useRouter();

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setUser(user);
        router.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const logout = () => {
    signOut(auth).then(() => {
      setUser(null);
      router.push("/login");
    });
  };
  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setUser(user);
        router.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    return onIdTokenChanged(auth, async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", { path: "/" });
        return;
      }
      setUser(user);

      const token = await user.getIdToken();
      nookies.set(undefined, "token", token, { path: "/" });
    });
  }, [auth]);

  return (
    <authContext.Provider value={{ user, login, logout, register }}>
      {children}
    </authContext.Provider>
  );
};

export function useAuth() {
  return React.useContext(authContext);
}
