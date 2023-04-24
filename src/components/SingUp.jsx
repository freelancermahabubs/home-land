import React from "react";
import "./SingUp.css";

import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const SingUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sing UP to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name*"
                required
              />
            </div>
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
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com*"
                required
              />
            </div>
            <div className="password-filed">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password da
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                id="password"
                placeholder="••••••••*"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              {passwordShown ? (
                <EyeSlashIcon
                  onClick={togglePassword}
                  className="eye text-blue-500"
                />
              ) : (
                <EyeIcon
                  onClick={togglePassword}
                  className="eye text-blue-500"
                />
              )}
            </div>
            <div className="password-filed">
              <label
                htmlFor="confirm password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm Password
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                name="confirm password"
                id="password"
                placeholder="••••••••*"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              {passwordShown ? (
                <EyeSlashIcon
                  onClick={togglePassword}
                  className="eye text-blue-500"
                />
              ) : (
                <EyeIcon
                  onClick={togglePassword}
                  className="eye text-blue-500"
                />
              )}
            </div>
            <div className="form-control mt-6 bg-violet-700 max-w-[180px] text-gray-500 text-center rounded-full p-2 dark:text-gray-300">
              <button className="btn btn-primary">Create Account</button>
            </div>
            <p className="pl-2">
              <span className="text-sm text-gray-500 dark:text-gray-300">
                Already have an account?
              </span>
              <Link to="/login">
                <span className="text-orange-500 pl-1">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
