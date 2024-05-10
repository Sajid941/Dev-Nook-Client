
const Banner = () => {

    return (
        <div className="bg-wave-2 dark:bg-wave bg-no-repeat bg-cover h-fit md:h-screen w-screen py-16 px-5 md:px-10 lg:px-20">
            <div className="lg:grid grid-cols-5 gap-6 mt-10">
                {/* left side banner */}
                <div className="col-span-3">
                    <img className="md:h-[430px] w-full object-cover rounded-t-lg" src="https://i.postimg.cc/NfTg5NYM/lautaro-andreani-UYs-BCu9-RP3-Y-unsplash.jpg" alt="" />

                    <div className="absolute top-32 ml-5 bg-white/20 bg-opacity-5 backdrop-blur-lg py-1 px-5 rounded-full">
                        <p className="text-white">JavaScript</p>
                    </div>

                    <div className="bg-primary-color rounded-b-lg p-2">
                        <h2 className="md:text-3xl text-2xl ml-4 text-white font-bold">Getting Started with React.js</h2>
                    </div>
                </div>
                {/* right side banner */}
                <div className="col-span-2  space-y-5 mt-4 lg:mt-0">
                    {/* right 1 */}
                    <div className="relative h-fit">

                        <img className="md:h-[180px] w-full object-cover rounded-t-lg" src="https://i.postimg.cc/nhGp1CXf/hitesh-choudhary-D9-Zow2-REm8-U-unsplash.jpg" alt="" />

                        <div className="absolute top-3 ml-5 bg-white/10 bg-opacity-20 backdrop-blur-md py-1 px-5 rounded-full">
                            <p className="text-white">Python</p>
                        </div>

                        <div className="bg-primary-color rounded-b-lg p-2">
                            <h2 className="text-2xl ml-4 text-white font-bold">10 Tips for Mastering Python</h2>
                        </div>
                    </div>
                    {/* right 2 */}
                    <div className="relative h-fit">
                        <img className="md:h-[180px] w-full object-cover rounded-t-lg" src="https://i.postimg.cc/fT4snxXh/c2e033cbbc9a3689440374833d46bb6770bf40dc-1198x672.webp" alt="" />

                        <div className="absolute top-3 ml-5 bg-white/20 bg-opacity-5 backdrop-blur-lg py-1 px-5 rounded-full">
                            <p className="text-white">Machine Learning</p>
                        </div>

                        <div className="bg-primary-color rounded-b-lg p-2">
                            <h2 className="text-2xl ml-4 text-white font-bold">Introduction to Machine Learning</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;