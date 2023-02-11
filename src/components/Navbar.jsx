import { getActiveQuestion, setActiveQuestion } from "@/slices/colorSlice";
import { setActiveTab } from "@/slices/navSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentQ = useSelector(getActiveQuestion);

  const handleClick = (value, pageNo) => {
    dispatch(setActiveTab(value));
    dispatch(setActiveQuestion(pageNo));
  };

  return (
    <div className="w-[75%] flex gap-1 px-1 pt-1 h-8 ml-1">
      <p
        className={`navButtons`}
        onClick={() => {
          handleClick("all_sections", 1);
        }}
      >
        All Sections
      </p>
      <p
        className={`navButtons ${
          currentQ >= 1 && currentQ <= 3 ? "bg-blue-700" : ""
        }`}
        onClick={() => {
          handleClick("physics", 1);
        }}
      >
        PHYSICS
      </p>
      <p
        className={`navButtons ${
          currentQ >= 4 && currentQ <= 6 ? "bg-blue-700" : ""
        }`}
        onClick={() => {
          handleClick("chemisty", 4);
        }}
      >
        CHEMISTRY
      </p>
      <p
        className={`navButtons ${
          currentQ >= 7 && currentQ <= 10 ? "bg-blue-700" : ""
        }`}
        onClick={() => {
          handleClick("maths", 7);
        }}
      >
        MATHS
      </p>
    </div>
  );
};

export default Navbar;
