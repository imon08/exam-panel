import { getColors, setAllColors } from "@/slices/colorSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionCard from "./QuestionCard";
import { questions } from "@/constants/Constants";

const QuestionSection = () => {
  const dispatch = useDispatch();
  const colors = useSelector(getColors);
  const [currentQ, setCurrentQ] = useState(colors[0].no);

  const handleClick = (newStatus) => {
    const newColors = colors.map((obj) => {
      
      if (obj.no === currentQ) {
        return { ...obj, status: newStatus };
      }
      return obj;
    });
    if (currentQ == 10) setCurrentQ(1);
    else setCurrentQ(currentQ + 1);
    dispatch(setAllColors(newColors));
  };
  return (
    <div>
      <div className="border-2 m-2 border-gray-500 rounded-md h-[32rem] overflow-hidden">
        <QuestionCard question={questions[currentQ - 1]} />
      </div>
      <div className="flex gap-1 px-1 pt-1 ml-2">
        <p className="qSecButtons">CLEAR RESPONSE</p>
        <p className="qSecButtons">REVIEW</p>
        <p
          onClick={() => {
            handleClick("dump");
          }}
          className="qSecButtons"
        >
          DUMP
        </p>
        <p
          onClick={() => {
            if (currentQ == 1) setCurrentQ(10);
            else setCurrentQ(currentQ - 1);
          }}
          className="qSecButtons"
        >
          PREVIOUS
        </p>
        <p
          onClick={() => {
            if (currentQ == 10) setCurrentQ(1);
            else setCurrentQ(currentQ + 1);
          }}
          className="qSecButtons"
        >
          NEXT
        </p>
      </div>
    </div>
  );
};

export default QuestionSection;
