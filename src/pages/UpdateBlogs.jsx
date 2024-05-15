import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateBlogs = () => {
    const axiosSecure = useAxiosSecure()
    const blog = useLoaderData()
    const navigate = useNavigate()
    const { _id,title, image, category, short_description, long_description } = blog;

    const handleUpdateBlog = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const photoURL = form.photoURL.value;
        const category = form.category.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const blogData = { title, image: photoURL, category, short_description, long_description }

        axiosSecure.patch(`/blogs/${_id}`, blogData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('Blog Updated')
                    navigate(`/blogDetails/${_id}`)
                    form.reset()
                }
            })
            .catch(error => {
                toast.error(error.message)
            })


    }
    return (
        <div className="py-20 px-5 md:px-10 lg:px-20 ">
            <div className=''>
                <h1 className="text-3xl font-bold text-center">Update Your Blogs</h1>
                <form onSubmit={handleUpdateBlog} className="lg:px-48">
                    {/* row-1 */}
                    <div>
                        <label className="label">Title</label>
                        <input type="text" name="title" defaultValue={title} required placeholder="Enter your blog title" className="input-md text-[18px] border-2 border-[#747474] dark:bg-[#0a0e14] rounded w-full" />
                    </div>

                    {/* row-2 */}
                    <div className="md:grid grid-cols-2 gap-2">
                        <div>
                            <label className="label">Photo</label>
                            <input type="text" name="photoURL" defaultValue={image} required placeholder="Enter your blog photo URL" className="input-md text-[18px] border-2 border-[#747474] dark:bg-[#0a0e14] rounded w-full" />
                        </div>
                        <div>
                            <label className="label">Category</label>
                            <select name='category' defaultValue={category} className="select-md text-[18px] border-2 border-[#747474] dark:bg-[#0a0e14] rounded w-full">
                                <option defaultValue={"Technology"} >Technology</option>
                                <option>Cloud Computing</option>
                                <option>Programming</option>
                                <option>Data Analytics</option>
                                <option>Ethics in Technology</option>
                                <option>Web Development</option>
                                <option>DevOps</option>
                                <option>Cybersecurity</option>
                                <option>Internet</option>
                                <option>Artificial Intelligence</option>
                            </select>
                        </div>
                    </div>

                    {/* row-3 */}
                    <div>
                        <div>
                            <label className="label">Short Description</label>
                            <textarea name="short_description" defaultValue={short_description} className="text-[18px] border-2 border-[#747474] dark:bg-[#0a0e14] rounded w-full p-3" required placeholder="Short Description"></textarea>
                        </div>
                    </div>

                    {/* row-4 */}
                    <div>
                        <div>
                            <label className="label">Long Description</label>
                            <textarea name="long_description" defaultValue={long_description} className="text-[18px] border-2 border-[#747474] dark:bg-[#0a0e14] rounded w-full p-3" rows={6} required placeholder="Long Description"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Submit" className='btn bg-primary-color hover:bg-[#01c2d9] w-full text-white' />
                </form>
            </div>
        </div>
    );
};

export default UpdateBlogs;