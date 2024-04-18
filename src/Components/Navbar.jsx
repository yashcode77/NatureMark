import React from "react";

function Navbar() {
  return (
    <div className="flex justify-around border-2 h-16 bg-green-800 text-white flex-wrap">
      <div className="my-auto hover:cursor-pointer">NatureMark System</div>
      <div className="flex my-auto flex-wrap">
        <div className="active:bg-green-100 hover:cursor-pointer hover:opacity-75 hover:border-2 active:border-2 rounded-md px-4 py-1 hover:bg-green-100 hover:text-black active:text-black hover:font-normal">
          Home
        </div>
        <div className="active:bg-green-100 hover:cursor-pointer hover:opacity-75 hover:border-2 active:border-2 rounded-md px-4 py-1 hover:bg-green-100 hover:text-black active:text-black hover:font-normal">
          Services
        </div>
        <div className="active:bg-green-100 hover:cursor-pointer hover:opacity-75 hover:border-2 active:border-2 rounded-md px-4 py-1 hover:bg-green-100 hover:text-black active:text-black hover:font-normal">
          About Us
        </div>
        <div className="active:bg-green-100 hover:cursor-pointer hover:opacity-75 hover:border-2 active:border-2 rounded-md px-4 py-1 hover:bg-green-100 hover:text-black active:text-black hover:font-normal">
          Contact
        </div>
      </div>
      <div className="my-auto bg-green-500 px-4 py-1 rounded-lg font-bold text-black hover:cursor-pointer hover:opacity-80">
        Sign In
      </div>
    </div>
  );
}

export default Navbar;
