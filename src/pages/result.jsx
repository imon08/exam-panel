import React from "react";
import { questions } from "@/constants/Constants";
import { useSelector } from "react-redux";
import { getColors } from "@/slices/colorSlice";

const Result = () => {
  const colors = useSelector(getColors);

  const getScore = () => {
    let score = 0;
    let index = 0;
    questions.map((item) => {
      if (item.correctOpton === colors[index].studentAnswer) score += 1;
      // console.log(item.correctOpton, colors[index].studentAnswer);
      index += 1;
    });
    return score;
  };

  const correctAnswers = () => {
    return questions.map((item, index) => {
      if (item.correctOpton !== colors[index].studentAnswer) {
        const ansProvided = colors[index].studentAnswer;
        return (
          <div className="ml-4 border-2 p-2 rounded-md m-2">
            <div>{item.question}</div>
            <div>Your answer : {item.options[ansProvided - 1]}</div>
            <div>Correct answer: {item.options[item.correctOpton - 1]}</div>
          </div>
        );
      } else return null;
    });
  };

  return (
    <div>
      <div className="text-3xl px-5 text-center m-5 ">
        <p className="p-2">Congratulations! You scored :</p>
        <p>{getScore()}/10</p>
      </div>
      <div>
        <p className="text-xl ml-4">Correct Answers :</p>
        <div>{correctAnswers()}</div>
      </div>
    </div>
  );
};

export default Result;
