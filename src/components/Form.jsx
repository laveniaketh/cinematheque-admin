import React from "react";
import { Checkbox, Label, FloatingLabel, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="overflow-hidden relative text-center justify-center p-10 rounded-lg shadow-lg shadow-[#2D2D2F] bg-[#242424] mt-4 w-full max-w-md mx-auto">
      {/* Background Icon */}
      <div
        className="absolute -bottom-8 -right-30 w-105 h-105 bg-no-repeat bg-contain opacity-20 rotate-6"
        style={{ backgroundImage: `url('/popcorn-box (1).png')` }}
      ></div>

      <h1 className="text-md font-bold antialiased leading-none tracking-tight text-gray-900 dark:text-white">
        Welcome
      </h1>
      <p className="font-medium text-lg text-white dark:text-[#777777] mb-2 mt-4">
        Enter account details
      </p>
      <form className="flex flex-col gap-4">
        <div>
          <FloatingLabel
            variant="outlined"
            label="Username"
            id="username"
            type="text"
            className=" dark:bg-[#242424] border-[#AAAAAA] focus:border-white dark:border-[#BBBBBB] dark:focus:border-white peer-focus:text-white dark:focus:text-white dark:text-[#807B7B] peer-focus:dark:text-white"
          />
        </div>
        <div>
          <FloatingLabel
            variant="outlined"
            label="Password"
            id="password1"
            type="password"
            required
            className=" dark:bg-[#242424] border-[#AAAAAA] focus:border-white dark:border-[#BBBBBB] dark:focus:border-white peer-focus:text-white dark:focus:text-white dark:text-[#807B7B] peer-focus:dark:text-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            className="text-[#BBBBBB] dark:ring-offset-[#242424] dark:focus:ring-[#BBBBBB] dark:bg-[#1E1E1E] dark:border-[#BBBBBB]"
          />
          <Label
            htmlFor="remember"
            className="font-medium text-sm text-white dark:text-text-white"
          >
            Remember me
          </Label>
        </div>
        <Button
          as={Link}
          to="/dashboard"
          className="m-3 text-[#171718] dark:text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-4 dark:focus:outline-none dark:focus:ring-yellow-300 dark:shadow-[0_0_20px_5px_rgba(255,221,87,0.6)] dark:hover:shadow-[0_0_30px_10px_rgba(255,221,87,0.8)] dark:font-semibold dark:rounded-full dark:text-medium dark:antialiased dark:px-10 dark:py-2.5 dark:transition-all dark:duration-300 dark:ease-in-out"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Form;
