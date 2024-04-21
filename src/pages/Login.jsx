import { Link } from "react-router-dom";
import Form from "../Login_signUp/Form";
import SideOption from "../Login_signUp/SideOption";
import { useState } from "react";
function Login() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-neutral-100 max-sm:my-28">
      <div className="bg-white flex flex-col sm:flex-row border-2 sm:max-w-screen-xl  rounded-2xl shadow-2xl aspect-w-1 aspect-h-1">
        <Form />
        <SideOption />
      </div>
    </div>
  );
}

export default Login;
