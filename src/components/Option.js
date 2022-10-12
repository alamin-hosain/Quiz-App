import React, { useState } from 'react';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
import './SingleQuiz.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Option = ({ option, correctAnswer, handleCount, id }) => {
    const [selected, setSelected] = useState();
    const [isActive, setIsActive] = useState(false);


    const handleClick = (option) => {

        if (option === correctAnswer) {
            setSelected(correctAnswer);
            toast.success('Your Answer is Correct', { autoClose: 500, position: "top-center", })


        } else if (option !== correctAnswer) {
            setSelected(false)
            toast.error('Your Answer is Wrong', { autoClose: 500, position: "top-center", })
            setIsActive(!isActive)
        }
    }


    return (
        <div onClick={() => { handleClick(option); handleCount(correctAnswer, option, id) }} className={`flex items-center border border-gray-600 p-6 rounded-lg cursor-pointer hover:bg-green-300 ${selected ? 'green' : ''} ${isActive ? 'red' : ''} `} >
            <button type='radio'>{isActive ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}</button>
            <p className='ml-6' >{option}</p>
            <ToastContainer />

        </div>
    );
};

export default Option;