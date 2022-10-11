import React from 'react';
import { useLoaderData } from 'react-router-dom';

import SingleQuiz from '../SingleQuiz';


const Quiz = () => {
    const singleQuiz = useLoaderData().data;
    const { id, name, questions, logo } = singleQuiz;


    const index = questions.map(object => object.id).indexOf('c')

    return (
        <div>
            <h1 className='text-4xl font-bold text-white mt-12 text-center bg-red-600 w-3/4 mx-auto rounded-lg py-4'>Quiz Of: {name}</h1>
            {
                questions.map((singleQuestion, index) => <SingleQuiz key={singleQuestion.id} singleQuestion={singleQuestion} index={index} />)
            }
        </div>

    );
};

export default Quiz;