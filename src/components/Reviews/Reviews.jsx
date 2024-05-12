
const Reviews = () => {
    return (
        <div>
            <div className="text-center  px-5 md:px-0 space-y-3 mt-20 mb-10">
                <h1 className="text-3xl font-bold ">Reader Reviews</h1>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 px-5 md:px-10 lg:px-20">
                {/* Review 1 */}
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-xl border dark:text-white dark:bg-none  default_cursor_land">
                    <div className="flex justify-between p-4 default_cursor_land">
                        <div className="flex space-x-4 default_cursor_land">
                            <div>
                                <img src="https://i.postimg.cc/qvqwwmwb/derick-mckinney-Quw-QYDBI6s-I-unsplash.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500 default_cursor_land" />
                            </div>
                            <div>
                                <h4 className="font-bold">Alex </h4>
                                <span className="text-xs dark:text-gray-600">2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">4.5</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-[#747474] default_cursor_land">
                        <p className="default_cursor_land">Dev Nook has become my go-to resource for all things development-related. The articles are not only informative but also written in a way that,s easy to understand, even for beginners like me.</p>
                        <p className="default_cursor_land"> Whether it,s coding tutorials, industry insights, or career advice, Dev Nook has everything I need to level up my skills!</p>
                    </div>
                </div>
                {/* Review 1 */}
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-xl border dark:text-white dark:bg-none  default_cursor_land">
                    <div className="flex justify-between p-4 default_cursor_land">
                        <div className="flex space-x-4 default_cursor_land">
                            <div>
                                <img src="https://i.postimg.cc/W1ynHMf2/engin-akyurt-GQe-Hbaf05-Z0-unsplash.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500 default_cursor_land" />
                            </div>
                            <div>
                                <h4 className="font-bold">Emily K. </h4>
                                <span className="text-xs dark:text-gray-600">2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">4.2</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-[#747474] default_cursor_land">
                        <p className="default_cursor_land">Dev Nook is a paradise for developers! Whether you are a beginner looking to learn the basics or an experienced pro seeking advanced techniques, this website has it all. </p>
                        <p className="default_cursor_land"> The tutorials are clear and concise, the tips are actionable, and the community is supportive. I am so grateful to have stumbled upon this treasure trove of knowledge.</p>
                    </div>
                </div>
                {/* Review 1 */}
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-xl border dark:text-white dark:bg-none  default_cursor_land">
                    <div className="flex justify-between p-4 default_cursor_land">
                        <div className="flex space-x-4 default_cursor_land">
                            <div>
                                <img src="https://i.postimg.cc/65Yzdsr4/logan-weaver-lgnwvr-IVXo-VHXq-VCY-unsplash.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500 default_cursor_land" />
                            </div>
                            <div>
                                <h4 className="font-bold">James H. </h4>
                                <span className="text-xs dark:text-gray-600">2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">4.8</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-[#747474] default_cursor_land">
                        <p className="default_cursor_land">Dev Nook takes a refreshing approach to tech education, making complex concepts easy to grasp and fun to learn. </p>
                        <p className="default_cursor_land"> The articles are written with passion and expertise, and the interactive elements, like coding challenges and quizzes, keep me engaged and motivated to keep learning. I can not recommend it enough!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;