import { getColors, setAllColors } from "@/slices/colorSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const QuestionCard = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const colors = useSelector(getColors);

  useEffect(() => {
    const prevChoice = colors.find((item) => {
      return item.no === question.no;
    });
    if (prevChoice?.studentAnswer) {
      setSelectedOption(prevChoice.studentAnswer);
    } else {
      setSelectedOption(null);
    }
  }, [question.no, colors]);

  const handleChange = (answer) => {
    setSelectedOption(answer);
    const newColors = colors.map((obj) => {
      if (obj.no === question.no) {
        return { ...obj, studentAnswer: answer };
      }
      return obj;
    });
    dispatch(setAllColors(newColors));
  };

  return (
    <div>
      <div className="flex justify-between bg-[#4682B4] text-white p-1">
        <p>Q No. {question.no}</p>
        <div>
          <label htmlFor="language">Choose a language: </label>
          <select
            name="language"
            className="bg-white border-2 border-gray-600 text-black overflow-hidden"
          >
            <option value="english">English</option>
            <option value="bengali">Bengali</option>
          </select>
        </div>
      </div>
      <div className="flex gap-3 p-2 text-sm md:text-lg">
        <div className="w-[48%] p-2">
          <p>QUESTION INSTRUCTION</p>
          <p className="text-justify">{question.instruction}</p>
        </div>
        <div className="w-[48%] p-2">
          <p>QUESTION</p>
          <p>{question.question}</p>
          <div className="flex items-center gap-2">
            <input
              onChange={() => handleChange(1)}
              id="option1"
              type="radio"
              checked={selectedOption === 1}
            />
            <label htmlFor="option1">{question.options[0]}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              onChange={() => handleChange(2)}
              id="option2"
              type="radio"
              checked={selectedOption === 2}
            />
            <label htmlFor="option2">{question.options[1]}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              onChange={() => handleChange(3)}
              id="option3"
              type="radio"
              checked={selectedOption === 3}
            />
            <label htmlFor="option3">{question.options[2]}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              onChange={() => handleChange(4)}
              id="option4"
              type="radio"
              checked={selectedOption === 4}
            />
            <label htmlFor="option4">{question.options[3]}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
