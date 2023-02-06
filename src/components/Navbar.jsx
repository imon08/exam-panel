import { setActiveTab } from "@/slices/navSlice";
import React from "react";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(setActiveTab(value));
  };

  return (
    <div className="w-[75%] flex gap-1 px-1 m-1">
      <p
        className="navButtons"
        onClick={() => {
          handleClick("all_sections");
        }}
      >
        All Sections
      </p>
      <p
        className="navButtons"
        onClick={() => {
          handleClick("physics");
        }}
      >
        PHYSICS
      </p>
      <p
        className="navButtons"
        onClick={() => {
          handleClick("chemisty");
        }}
      >
        CHEMISTRY
      </p>
      <p
        className="navButtons"
        onClick={() => {
          handleClick("maths");
        }}
      >
        MATHS
      </p>
    </div>
  );
};

export default Navbar;
