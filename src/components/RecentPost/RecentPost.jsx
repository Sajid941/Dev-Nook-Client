import { useQuery } from "@tanstack/react-query";
import BlogCard from "../BlogCard/BlogCard";

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
                <h1 className="text-3xl font-bold ">RECENT PUBLICATIONS</h1>
                <p className="text-[#747474] dark:text-white">Stay updated with the latest in tech.<br /> Explore our newest articles  covering programming, web development, cybersecurity, and more!</p>
            </div>
            <div className="md:grid md:grid-cols-2 my-10 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-6 space-y-6 md:space-y-0">
                {
                    blogs.slice(0, 6).map(blog =><BlogCard key={blog._id} blog={blog}/> )
                }
            </div>
        </div>
    );
};

export default RecentPost;