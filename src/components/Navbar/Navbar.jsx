import React from "react";
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-black p-2 w-full">
        <h3 className="text-white text-2xl font-bold tracking-normal leading-none text-center">
          Welcome All
        </h3>
      </div>

      <div className="flex justify-around items-center">
        <div>
          <img className="h-28 w-full" src={logo} alt="store" />
        </div>

        <div className="flex flex-row items-center ">
          <button className="mr-4 text-base font-medium tracking-normal leading-none text-center">
            Logout
          </button>
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
