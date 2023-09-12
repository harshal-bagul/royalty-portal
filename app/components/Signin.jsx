import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const { user, googleSignIn, googleLogout, customSignIn } = UserAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmail = async () => {
    try {
      await customSignIn(username, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required=""
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        />
      </div>
      <button
        type="submit"
        onClick={signInWithEmail}
        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign in
      </button>
      <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
        Don't have an account yet?{" "}
        <a
          href=""
          className="font-medium text-primary-600 hover:underline dark:text-white"
        >
          Sign up
        </a>
      </p>
      <div className="border-b-2"></div>
    </div>
  );
};

export default Signin;
