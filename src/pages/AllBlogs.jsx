import { useQuery } from "@tanstack/react-query";
import BlogCard from "../components/BlogCard/BlogCard";

const AllBlogs = () => {
    const {data:blogs , isPending} = useQuery({
        queryKey:['blogs'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:3000/blogs')
            return res.json()
        }
    })
    if(isPending){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }
    return (
        <div className="pt-20">
            <div className="md:grid md:grid-cols-2 my-10 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-6 space-y-6 md:space-y-0">
                {
                    blogs.map((blog,idx)=> <BlogCard key={idx} blog={blog}/>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;