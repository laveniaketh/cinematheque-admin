import React from "react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  FloatingLabel,
} from "flowbite-react";
import Form from "../components/Form";

const LoginPage = () => {
  return (
    <div>
      <div className="pattern" />
      <div className="px-5 py-12 h-screen mx-auto  flex flex-col relative z-10">
        <h1 className=" text-7xl font-black leading-none tracking-tight text-gray-900 md:text-5xl lg:text-9xl dark:text-white">
          <span className="text-gradient">Cinema</span>theque
        </h1>
        <Form />
      </div>
    </div>
  );
};

export default LoginPage;
