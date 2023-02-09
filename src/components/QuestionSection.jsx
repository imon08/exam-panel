import { getColors } from "@/slices/colorSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import QuestionCard from "./QuestionCard";
import { questions } from "@/constants/Constants";

const QuestionSection = () => {
  const colors = useSelector(getColors);
  const [currentQ, getCurrentQ] = useState(colors[0].no);
  return (
    <div className="border-2 m-2 border-gray-500 rounded-md h-[32rem] overflow-hidden">
      <QuestionCard questionNo={currentQ} question={questions[currentQ+1]}/>
    </div>
  );
};

export default QuestionSection;
