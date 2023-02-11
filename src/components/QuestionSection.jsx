import {
  getActiveQuestion,
  getColors,
  setActiveQuestion,
  setAllColors,
} from "@/slices/colorSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionCard from "./QuestionCard";
import { questions } from "@/constants/Constants";

const QuestionSection = () => {
  const dispatch = useDispatch();
  const colors = useSelector(getColors);
  const currentQ = useSelector(getActiveQuestion);

  const setCurrentQ = (val) => {
    dispatch(setActiveQuestion(val));
  };

  const handleClick = (newStatus) => {
    let newColors;
    if (newStatus === "clear") {
      newColors = colors.map((obj) => {
        if (obj.no === currentQ) {
          return { ...obj, studentAnswer: null };
        }
        return obj;
      });
    } else {
      if (newStatus === "next") {
        if (colors[currentQ - 1].studentAnswer) newStatus = "answer";
        else newStatus = "noAnswer";
      }

      if (newStatus === "review") {
        if (colors[currentQ - 1].studentAnswer) newStatus = "review+ans";
        else newStatus = "review-ans";
      }
      newColors = colors.map((obj) => {
        if (obj.no === currentQ) {
          return { ...obj, status: newStatus };
        }
        return obj;
      });
      if (currentQ == 10) setCurrentQ(1);
      else setCurrentQ(currentQ + 1);
    }

    if (newColors) dispatch(setAllColors(newColors));
  };
  return (
    <div>
      <div className="border-2 m-2 border-gray-500 rounded-md h-[32rem] overflow-hidden">
        <QuestionCard question={questions[currentQ - 1]} />
      </div>
      <div className="flex gap-1 px-1 pt-1 ml-2">
        <p
          onClick={() => {
            handleClick("clear");
          }}
          className={`qSecButtons`}
        >
          CLEAR RESPONSE
        </p>
        <p
          onClick={() => {
            handleClick("review");
          }}
          className="qSecButtons"
        >
          REVIEW
        </p>
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
            handleClick("prev");
          }}
          className="qSecButtons"
        >
          PREVIOUS
        </p>
        <p
          onClick={() => {
            if (currentQ == 10) setCurrentQ(1);
            else setCurrentQ(currentQ + 1);
            handleClick("next");
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
