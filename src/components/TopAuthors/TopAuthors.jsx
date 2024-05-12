import { IoIosArrowRoundForward } from "react-icons/io";

const TopAuthors = () => {
    return (
        <div >
            <div className="flex justify-between  px-5 md:px-10 lg:mx-24 mt-20 mb-10 border-b-2 pb-5">
                <h1 className="text-2xl font-bold">TOP AUTHORS</h1>
                <p className="flex gap-1 hover:cursor-pointer items-center">All Authors <IoIosArrowRoundForward size={30}/></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10 lg:px-24 my-10">
                {/* Author 1 */}
                <div className="flex gap-5 bg-[#f9fafb] dark:hover:bg-[#0a0e14] dark:bg-[#0a0e14] border p-6 rounded-3xl  hover:cursor-pointer duration-200 hover:bg-white hover:-translate-y-2">
                    <img className="w-24 h-24 rounded-full object-cover" src="https://i.postimg.cc/pXtmVy3P/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg" alt="" />
                    <div className="space-y-1">
                        <h4 className="text-2xl font-bold">Adrio David</h4>
                        <p className="text-[#747474] lg:text-[18px]">Director of Operations</p>
                        <p className="text-[#747474] lg:text-[18px]">03 Published posts</p>
                    </div>
                </div>
                {/* Author 2 */}
                <div className="flex gap-5 bg-[#f9fafb] dark:hover:bg-[#0a0e14] dark:bg-[#0a0e14] border p-6 rounded-3xl hover:cursor-pointer duration-200 hover:bg-white hover:-translate-y-2">
                    <img className="w-24 h-24 rounded-full object-cover" src="https://i.postimg.cc/gj3rqPL9/irene-strong-TMt3-JGo-Vlng-unsplash.jpg" alt="" />
                    <div className="space-y-1">
                        <h4 className="text-2xl font-bold">Talan Philips</h4>
                        <p className="text-[#747474] lg:text-[18px]">Content Writer</p>
                        <p className="text-[#747474] lg:text-[18px]">05 Published posts</p>
                    </div>
                </div>
                {/* Author 3 */}
                <div className="flex gap-5 bg-[#f9fafb] dark:hover:bg-[#0a0e14] dark:bg-[#0a0e14] border p-6 rounded-3xl hover:cursor-pointer duration-200 hover:bg-white hover:-translate-y-2">
                    <img className="w-24 h-24 rounded-full object-cover" src="https://i.postimg.cc/xjmkSLxs/philipp-wuthrich-5n3-JP9-WAJTs-unsplash.jpg" alt="" />
                    <div className="space-y-1">
                        <h4 className="text-2xl font-bold">John Doe</h4>
                        <p className="text-[#747474] lg:text-[18px]">Director of Operations</p>
                        <p className="text-[#747474] lg:text-[18px]">10 Published posts</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopAuthors;