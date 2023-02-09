import React from "react";
import Profile from "../assets/profilePic.jpg";

const RightSideBar = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="border-2 w-[30%]  md:w-[13%]">
      <div className="bg-blue-100 pb-3 border-2 border-gray-400 pl-1 rounded-md">
        <img className="h-20 w-20 object-cover" src={Profile.src} alt="" />
      </div>
      <div className="rounded-md border-gray-400 border-2 mt-2 overflow-hidden h-72">
        <div className="bg-[#55a0b5] px-2 py text-white">Question Pallete</div>
        <div className="flex flex-wrap justify-center">
          {array.map((item) => {
            return (
              <button className="px-3 py-1 bg-gray-200 w-9 text-center">
                {item}
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
          <div className="w-[50%] bg-green-300 text-center m-1 border-2">
            Answer
          </div>
          <div className="w-[50%] bg-red-300 text-center m-1">No Answer</div>
        </div>
        <div className="flex">
          <div className="w-[50%] bg-purple-300 text-center m-1">
            Review+Ans
          </div>
          <div className="w-[50%] bg-yellow-300 text-center m-1">
            Review-Ans
          </div>
        </div>
        <div className="flex">
          <div className="w-[50%] bg-gray-300 text-center m-1">Dump</div>
          <div className="w-[50%] bg-white-300 text-center m-1">No Visit</div>
        </div>
        <div className="bg-[#55a0b5] px-2 py text-white">All Questions</div>
        <div className="bg-blue-100 py-1 h-20 flex flex-wrap items-center">
          <button className="w-[46%] bg-[#4682B4] m-1 text-white rounded-sm">
            Profile
          </button>
          <button className="w-[46%] bg-[#4682B4] m-1 text-white rounded-sm">
            Instr
          </button>
          <button className="w-[46%] bg-[#4682B4] m-1 text-white rounded-sm">
            Questions
          </button>
          <button className="w-[46%] bg-[#4682B4] m-1 text-white rounded-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
