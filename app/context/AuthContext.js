import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const googleLogout = () => {
    signOut(auth);
  };

  const signUpWithEmail = (username, password, fullname) => {
    createUserWithEmailAndPassword(auth, username, password, fullname)
      .then((userCredential) => {
        setUser(userCredential.user);

        updateProfile(auth.currentUser,{
          displayName : fullname
        }).then((userCredential)=>{
          console.log("User has been Updated.",userCredential.user)
        })

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error", errorCode, errorMessage);
      });
  };

  const customSignIn = (username, password) => {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.log("Error", error, error.code, error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curruntUser) => {
      setUser(curruntUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, googleLogout, customSignIn, signUpWithEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
