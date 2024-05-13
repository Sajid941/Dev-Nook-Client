import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import BlogCard from "../components/BlogCard/BlogCard";

const Wishlist = () => {
    const { user } = useAuth()
    const { data: blogs, isPending } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/wishlist?email=${user.email}`)
            return res.json()
        }
    })

    if (isPending) {
        return <div className="flex justify-center items-center w-full h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div className="pt-20 px-5 md:px-10 lg:px-20">
            <div className="md:grid md:grid-cols-2 my-5 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-6 space-y-6 md:space-y-0">
                {
                    blogs.map((blog, idx) => <BlogCard key={idx} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Wishlist;