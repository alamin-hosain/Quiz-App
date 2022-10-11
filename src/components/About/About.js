import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        !Oh My Quiz
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">We Build</span>
                    </span>{' '}
                    Quiz app and website Desing
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    We are team of 10 people who are passionate about quiz and frontend website building. We are building useful internet products.

                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-20 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
                <img
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                />
                <img
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                />
                <img
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    alt=""
                />
                <img
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                />
            </div>
            <div className="flex items-center sm:justify-center">
                <Link
                    to="/quiz"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-black hover:bg-gray-600"
                >
                    Play Quiz
                </Link>
                <Link
                    to="/statistic"
                    aria-label=""
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-black hover:bg-gray-600"
                >
                    See Statistics
                </Link>
            </div>
        </div>
    );
};