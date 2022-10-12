import React, { useState } from 'react';
import { IoIosRadioButtonOff, IoMdEyeOff, IoMdEye } from "react-icons/io";
import Option from './Option';


const SingleQuiz = ({ singleQuestion, index, handleCount }) => {

    const { id, question, correctAnswer, options } = singleQuestion;

    const [correct, setCorrect] = useState('');

    const handleEyeButton = correctAnswer => {
        if (correct === '') {
            setCorrect(correctAnswer)
        }
        else {
            setCorrect('');
        }
    }



    return (
        <div className=' w-3/5 mx-auto bg-white p-6 rounded-lg shadow-sm mt-12'>
            <div className='mb-10'>
                <div className='py-6 relative'>
                    <h2 className='text-xl text-center font-medium mt-20 mb-6'><span className='text-red-600 font-bold '>Quiz {index + 1} :</span> {question}</h2>
                    <div className='flex justify-center items-center absolute top-0 right-0 bg-red-500 px-4 rounded-md shadow-md ease-in duration-500'>
                        <button onClick={() => handleEyeButton(correctAnswer)} className='text-2xl absolute top-0 right-0 py-2 px-2 text-white'>{correct ? <IoMdEye /> : <IoMdEyeOff />}</button>
                        <p className='mr-10 py-2 text-white'>{correct ? 'Hide Answer' : 'Show Answer'}</p>
                    </div>
                    {
                        correct ? <p className='absolute top-0 left-0 bg-green-600 p-2 rounded-md mb-4 text-white w-3/5'><span className='text-xl font-bold text-white'>Correct Answer : </span>{correct}</p> : ''
                    }
                </div>

                <div className='mt-6 grid grid-cols-2 gap-4'>
                    {options.map((option, idx) => (
                        <Option key={idx} option={option} correctAnswer={correctAnswer} handleCount={handleCount} id={id} />
                    ))}
                </div>

            </div>

        </div>

    );
};

export default SingleQuiz;