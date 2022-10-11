import React, { useContext, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { QuizContext } from '../Root';

const Statistics = () => {

    const quiz = useContext(QuizContext);

    return (

        <div className='flex justify-center items-center mt-56 mb-80 '>

            <BarChart
                width={590}
                height={420}
                data={quiz}
                margin={{
                    top: 5,
                    right: 50,
                    left: 50,
                    bottom: 5,
                }}
            >

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="id" fill="#8884d8" />
                <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>

        </div>

    );
};

export default Statistics;