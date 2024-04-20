import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Login_signUp/Form";
import SideOption from "../Login_signUp/SideOption";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const [show, setshow] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen w-full bg-neutral-100  max-sm:my-28">
      <div className="bg-white flex flex-col sm:flex-row-reverse border-2 sm:max-w-screen-xl rounded-2xl shadow-2xl aspect-w-1 aspect-h-1">
        <div className="sm:border-l-2 w-full sm:w-8/12">
          <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Create Your Account
                </h2>
              </div>
              <form className="mt-8 space-y-6 p-8" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-y-3">
                  <div>
                    <input
                      name="name"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex border-2 my-auto">
                    <input
                      type={show ? "text" : "password"}
                      required
                      className="appearance-none border-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                    {show ? (
                      <IoEyeSharp
                        className="my-auto mx-3 scale-125"
                        onClick={() => setshow(!show)}
                      />
                    ) : (
                      <FaEyeSlash
                        className="my-auto mx-3 scale-125"
                        onClick={() => setshow(!show)}
                      />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-wrap">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      I Agree to the terms and conditions
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="sm:w-7/12 bg-gradient-to-br from-green-900 to-green-400 text-white rounded-tl-2xl rounded-bl-2xl flex flex-col justify-center gap-y-5 p-8 ">
          <div className="text-3xl font-extrabold text-center">
            Welcome to NatureMark Systems
          </div>
          <div className="text-center">Already have an account?</div>
          <div className="flex justify-center mt-4">
            <button className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded-full w-full sm:w-auto">
              <Link to="/">Sign in</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
