import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import SingleQuiz from '../SingleQuiz';


const Quiz = () => {
    const singleQuiz = useLoaderData().data;
    const { id, name, questions, logo } = singleQuiz;
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    const handleCount = (correctAnswer, option, qId) => {
        if (correctAnswer === option) {
            setCount(count + 1)
        }
    }


    const handleClickToCheckResult = () => {
        setToggle(!toggle);
    }


    return (
        <div>
            <h1 className='text-4xl font-bold text-white mt-12 text-center bg-red-600 w-3/4 mx-auto rounded-lg py-4'>Quiz Of: {name}</h1>
            {
                questions.map((singleQuestion, index) => <SingleQuiz key={singleQuestion.id} singleQuestion={singleQuestion} index={index} handleCount={handleCount} />)
            }

            <div onClick={handleClickToCheckResult} className='text-center mt-20 bg-black w-4/12 mx-auto p-4 text-white rounded-lg text-3xl hover:bg-red-600 cursor-pointer'>
                <button className='text-center'>{toggle ? 'Close Result' : 'Check Result'}</button>
            </div>

            <div className={`text-center mt-14 bg-white w-4/12 mx-auto p-4 text-black rounded-lg text-3xl border border-black animate-bounce ease-in duration-300 ${toggle ? '' : 'hidden'}`}>
                <button className='text-center font-bold text-4xl'>You Got {count} out of {questions.length}</button>
            </div>

        </div>

    );
};

export default Quiz;