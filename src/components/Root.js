import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Footer } from './Footer/Footer';

import { Nav } from './NavBar';
export const QuizContext = createContext([]);

const Root = () => {
    const Quiz = useLoaderData().data;

    return (
        <QuizContext.Provider value={Quiz} >
            <div>
                <Nav />
                <Outlet />
                <Footer />
            </div>
        </QuizContext.Provider>
    );
};

export default Root;