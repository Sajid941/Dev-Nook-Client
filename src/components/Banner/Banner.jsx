
const Banner = () => {

    return (
        <div className="bg-wave-2 dark:bg-wave bg-no-repeat bg-cover h-fit md:h-screen w-screen py-16 px-5 md:px-10 lg:px-20">
            <div className="md:grid grid-cols-2 justify-center items-center mt-10 bg-white/30 bg-opacity-20 backdrop-blur-lg p-5 rounded-xl shadow-xl">
                <div className="px-20 space-y-4">
                    <h1 className="text-4xl font-bold">Understanding Quantum Computing</h1>
                    <p className="text-[#747474] dark:text-white">Gain insights into the principles of quantum computing and its potential impact on computing.</p>
                    <button className="btn bg-primary-color hover:bg-[#10a5ca] border-none text-white">Learn More</button>
                </div>
                <div>
                    <img className="rounded-lg" src="https://i.postimg.cc/7YLnP0bY/1-LIj-LH563-Nq9esjyde3-Csv-A.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;