import React from "react";

const QuestionCard = ({ questionNo, question }) => {
  return (
    <div>
      <div className="flex justify-between bg-[#4682B4] text-white p-1">
        <p>Q No. {questionNo}</p>
        <div>
          <label for="language">Choose a car: </label>
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
            <input id="option1" type="radio" name={question.no} />
            <label htmlFor="option1">{question.options[0]}</label>
          </div>
          <div className="flex items-center gap-2">
            <input id="option2" type="radio" name={question.no} />
            <label htmlFor="option2">{question.options[1]}</label>
          </div>
          <div className="flex items-center gap-2">
            <input id="option3" type="radio" name={question.no} />
            <label htmlFor="option3">{question.options[2]}</label>
          </div>
          <div className="flex items-center gap-2">
            <input id="option4" type="radio" name={question.no} />
            <label htmlFor="option4">{question.options[3]}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;