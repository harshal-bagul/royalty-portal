import Link from "next/link";
import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, googleLogout } = UserAuth();
  const handleSignOut = async () => {
    try {
      await googleLogout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!user ? (
        <></>
      ) : (
        <div className="h-20 w-full border-b-2 flex items-center justify-between p-2 dark:text-white">
          <ul className="flex">
            <li className="p-2 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="p-2 cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="p-2 cursor-pointer">
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
          <div className="flex p-8 justify-around gap-2">
            <Link href="">
              <img
                alt="profile"
                src={user.photoURL || 'avatar.svg'}
                className="mx-auto object-cover rounded-full h-12 w-12 "
              />
            </Link>
            <div>
              <p>Welcome, {user.displayName || user.email}</p>
              <p className="cursor-pointer" onClick={handleSignOut}>
                Logout
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
