import React from "react";
import Profile from "../assets/profilePic.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveQuestion,
  getColors,
  setActiveQuestion,
} from "@/slices/colorSlice";

const RightSideBar = () => {
  const colors = useSelector(getColors);
  const currentQ = useSelector(getActiveQuestion);
  const dispatch = useDispatch();

  const getTotal = (input) => {
    let count = 0;
    colors.map((item) => {
      if (item.status === input) count += 1;
    });
    return count;
  };

  const statusColor = (status) => {
    if (status === "answer") return "bg-green-300";
    else if (status === "noAnswer") return "bg-red-300";
    else if (status === "review+ans") return "bg-purple-300";
    else if (status === "review-ans") return "bg-yellow-300";
    else if (status === "dump") return "bg-gray-300";
    else if (status === "noVisits") return "bg-white";
  };

  return (
    <div className="border-2 w-full">
      <div className="bg-blue-100 pb-3 border-2 border-gray-400 pl-1 rounded-md">
        <img className="h-20 w-20 object-cover" src={Profile.src} alt="" />
      </div>
      <div className="rounded-md border-gray-400 border-2 mt-2 overflow-hidden h-72">
        <div className="bg-[#55a0b5] px-2 py text-white">Question Pallete</div>
        <div className="flex flex-wrap justify-evenly gap-1">
          {colors.map((item) => {
            return (
              <button
                onClick={() => dispatch(setActiveQuestion(item.no))}
                key={item.no}
                className={`px-4 py-1 ${statusColor(item.status)} ${
                  currentQ === item.no ? "border-2 border-black" : ""
                } w-9 flex justify-center`}
              >
                {item.no}
              </button>
            );
          })}
        </div>
      </div>
      <div className="rounded-md border-gray-400 border-2 mt-2 overflow-hidden">
        <div className="bg-[#55a0b5] px-2 py text-white">
          Legend (click to view)
        </div>
        <div className="flex">
          <div className="w-[50%] bg-green-300 text-center m-1 text-sm">
            {getTotal("answer")} Answer
          </div>
          <div className="w-[50%] bg-red-300 text-center m-1 text-sm ">
            {getTotal("noAnswer")} No Answer
          </div>
        </div>
        <div className="flex">
          <div className="w-[50%] bg-purple-300 text-center m-1 text-sm">
            {getTotal("review+ans")} Review+Ans
          </div>
          <div className="w-[50%] bg-yellow-300 text-center m-1 text-sm">
            {getTotal("review-ans")} Review-Ans
          </div>
        </div>
        <div className="flex">
          <div className="w-[50%] bg-gray-300 text-center m-1 text-sm">
            {getTotal("dump")} Dump
          </div>
          <div className="w-[50%] bg-white-300 text-center m-1 text-sm">
            {getTotal("noVisits")} No Visit
          </div>
        </div>
        <div className="bg-[#55a0b5] px-2 py text-white">All Questions</div>
        <div className="bg-blue-100 py-1 h-20 flex flex-wrap items-center h-24">
          <button className="w-[46%] bg-[#4682B4] m-1 text-white rounded-sm py-1">
            Profile
          </button>
          <button className="w-[46%] bg-[#4682B4] m-1 text-white rounded-sm py-1">
            Instr
          </button>
          <button className="w-[46%] bg-[#4682B4] m-1 text-white rounded-sm py-1">
            Questions
          </button>
          <button className="w-[46%] bg-[#4682B4] m-1 text-white rounded-sm py-1">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
