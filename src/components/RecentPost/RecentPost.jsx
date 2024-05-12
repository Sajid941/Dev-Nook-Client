import { useQuery } from "@tanstack/react-query";

const RecentPost = () => {
    const { data: blogs, isPending, } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/blogs')
            return res.json()
        }
    })
    if (isPending) {
        return <div className="flex justify-center items-center ">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    return (
        <div>
            <div className="text-center  px-5 md:px-0 space-y-3">
                <h1 className="text-3xl font-bold ">Newest Blogs</h1>
                <p className="text-[#747474] dark:text-white">Stay updated with the latest in tech.<br /> Explore our newest articles  covering programming, web development, cybersecurity, and more!</p>
            </div>
            <div className="md:grid md:grid-cols-2 my-10 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-6 space-y-6 md:space-y-0">
                {
                    blogs.reverse().slice(0, 6).map(blog => <div key={blog._id} className="card  bg-base-100 shadow-xl p-5 border">
                        <figure><img src={blog.photoURL} className="md:h-[280px] w-full object-cover  rounded-lg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                {blog.title}
                            </h2>
                            <div className="badge bg-[#06d6a0] ">{blog.category}</div>
                            <p>{blog.short_description}</p>
                            <div className="card-actions justify-end">
                                <div className=" py-1 px-4 rounded-xl bg-primary-color text-white hover:bg-[#10a5ca]">Fashion</div>
                                <div className=" py-1 px-4 rounded-xl bg-[#073b4c] text-white hover:bg-[#145265]">Products</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default RecentPost;