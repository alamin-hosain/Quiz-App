export const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            <div className="grid gap-5 mb-8 lg:grid-cols-1 sm:mx-auto lg:max-w-full">
                <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-20 xl:py-20 bg-white">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                        11 October 2022
                    </p>
                    <a
                        href="/"
                        className="inline-block mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"
                        title="Nori grape silver beet broccoli kombu beet"
                    >
                        Why do we need a Router in react JS?
                    </a>
                    <p className="mx-auto mb-2 text-gray-700">
                        React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    </p>
                </div>
                <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-20 xl:py-20 bg-white">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                        10 October 2022
                    </p>
                    <a
                        href="/"
                        className="inline-block mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"
                        title="Nori grape silver beet broccoli kombu beet"
                    >
                        How Context Api works in React Js ?
                    </a>
                    <p className="mx-auto mb-2 text-gray-700">
                        React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.eact.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store.
                    </p>
                </div>
                <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-20 xl:py-20 bg-white">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                        10 October 2022
                    </p>
                    <a
                        href="/"
                        className="inline-block mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"
                        title="Nori grape silver beet broccoli kombu beet"
                    >
                        How React useRef Hook Works ?
                    </a>
                    <p className="mx-auto mb-2 text-gray-700">
                        useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component.

                        The main use case for the useRef hook is to access a DOM child directly. I’ll show exactly how to do that in another section.
                    </p>
                </div>
            </div>
        </div>
    );
};