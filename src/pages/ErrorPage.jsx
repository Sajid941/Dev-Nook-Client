import { Link } from 'react-router-dom';
import  Error404 from '../assets/Animation - 1715424607400.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <section className="bg-white flex justify-center items-center h-screen ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <Lottie style={{height:300}} animationData={Error404}></Lottie>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something,s missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can,t find that page. You,ll find lots to explore on the home page. </p>
                    <Link to="/" className="inline-flex text-white bg-primary-color hover:bg-[#10a5ca] font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4">Back to Homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;