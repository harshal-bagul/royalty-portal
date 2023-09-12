import Link from "next/link";
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Signin from "./Signin";
import Register from "./Register";

const Login = () => {  
  const { user, googleSignIn, googleLogout, customSignIn } = UserAuth();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="Acc_GT_Dimensional_RGB.svg"
            alt="logo"
          />
          Accenture Song
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <Signin/>
          <div className="text-center">
            <p className="text-base text-[#adadad]">Connect With</p>
            <div className="flex flex-col mx-10 mb-10">
              <button
                aria-label="Continue with google"
                role="button"
                onClick={handleSignIn}
                className="hover:outline-none hover:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                  alt="google"
                />
                <p className="text-base font-medium ml-4 text-white">
                  Continue with Google
                </p>
              </button>
              <button
                aria-label="Continue with github"
                role="button"
                onClick={()=>{alert("Not yet implemented.")}}
                className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg"
                  alt="github"
                />
                <p className="text-base font-medium ml-4 text-white">
                  Continue with Github
                </p>
              </button>
              <button
                aria-label="Continue with twitter"
                role="button"
                onClick={()=>{alert("Not yet implemented.")}}
                className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg4.svg"
                  alt="twitter"
                />
                <p className="text-base font-medium ml-4 text-white">
                  Continue with Twitter
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
