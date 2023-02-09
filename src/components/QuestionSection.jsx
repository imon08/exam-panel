import { getColors } from '@/slices/colorSlice';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const QuestionSection = () => {
    const colors = useSelector(getColors);
    const [currentQ, getCurrentQ] = useState(colors[0].no)
  return (
    <div className='border-2 m-2 border-gray-500 p-2 rounded-md h-[32rem]'>
        <div>
            <p>Q No. {currentQ}</p>
        </div>
    </div>
  )
}

export default QuestionSection