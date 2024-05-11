
const AddBlogs = () => {
    return (
        <div className="py-20 px-5 md:px-10 lg:px-20 ">
            <div>
                <h1 className="text-3xl font-bold text-center">Add Your Blogs</h1>
                <form className="lg:px-48">
                    {/* row-1 */}
                    <div>
                        <label className="label">Title</label>
                        <input type="text" name="title" placeholder="Enter your blog title" className="input-md text-[18px] border-2 border-[#747474] dark:bg-[#0a0e14] rounded w-full" />
                    </div>

                    {/* row-2 */}
                    <div className="md:grid grid-cols-2 gap-2">
                        <div>
                            <label className="label">Photo</label>
                            <input type="text" name="photoURL" placeholder="Enter your blog photo URL" className="input-md text-[18px] border-2 border-[#747474] dark:bg-[#0a0e14] rounded w-full" />
                        </div>
                        <div>
                            <label className="label">Title</label>
                            <select className="select-md text-[18px] border-2 border-[#747474] dark:bg-[#0a0e14] rounded w-full">
                                <option selected>Technology</option>
                                <option>Cloud Computing</option>
                                <option>Data Analytics</option>
                                <option>Ethics in Technology</option>
                                <option>Web Development</option>
                                <option>DevOps</option>
                                <option>Cybersecurity</option>
                                <option>Internet</option>
                                <option>AI</option>
                            </select>
                        </div>
                    </div>

                    {/* row-3 */}
                    <div>
                        <div>
                            <label className="label">Short Description</label>
                            <textarea name="short-description" className="text-[18px] border-2 border-[#747474] dark:bg-[#0a0e14] rounded w-full p-3" placeholder="Short Description"></textarea>
                        </div>
                    </div>

                    {/* row-4 */}
                    <div>
                        <div>
                            <label className="label">Long Description</label>
                            <textarea name="long-description" className="text-[18px] border-2 border-[#747474] dark:bg-[#0a0e14] rounded w-full p-3" rows={6} placeholder="Long Description"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlogs;