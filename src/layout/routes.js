import { createBrowserRouter } from "react-router-dom";
import { About } from "../components/About/About";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import { Home } from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Root from "../components/Root";
import Statistics from "../components/Statistics/Statistics";
import { Blog } from '../components/Blog/Blog';


export const router = createBrowserRouter([
    {
        path: '/', element: <Root />, errorElement: <ErrorPage />,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            { path: '/', element: <Home /> },
            { path: '/quiz', element: < Quiz /> },
            { path: '/statistic', element: < Statistics /> },
            { path: '/blog', element: <Blog /> },
            { path: '/about', element: < About /> },
        ]
    }

])