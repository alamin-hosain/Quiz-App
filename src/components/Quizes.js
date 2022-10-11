import React from 'react';
import { Link } from 'react-router-dom';

const Quizes = ({ q }) => {

    return (
        <div key={q.id} className="border border-black p-4 rounded-md shadow-md">
            <img className="w-full" src={q.logo} alt="" />
            <div className="flex items-center justify-between">
                <h3 className="text-xl text-grey-500 font-bold mt-3 ">{q.name}</h3>
                <p className="text-md">Total Quiz: {q.total}</p>
            </div>
            <button className="bg-black text-white px-6 py-2 w-full rounded-md mt-4 cursor-pointer hover:text-yellow-400"><Link to={`/quiz/${q.id}`}>Start Practicing</Link> </button>
        </div>)
};

export default Quizes;