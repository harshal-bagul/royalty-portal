"use client";
import Login from "./components/Login";
import { UserAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";

export default function Home({ children }) {
  const { user, googleSignIn, googleLogout } = UserAuth();
  return (
    <main>
      {!user ? <Login /> : <></>}
      {/* <h1>Home Page</h1> */}
    </main>
  );
}
