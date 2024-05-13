import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const blog = useLoaderData()
    const {title,image,category,short_description,long_description}=blog
    return (
        <div className="pt-20">
        <div className="lg:flex  lg:p-10 p-5   items-center">
            <img className="lg:ml-10 lg:w-[425px] rounded-lg  " src={image} alt="" />
            <div className="w-full lg:ml-10 space-y-4 lg:pl-5 lg:border-l-2">
                <h1 className="text-4xl font-bold ">{title}</h1>
                <p className=""><span className="font-bold"></span> {short_description}</p>
                <div className="badge bg-[#06d6a0] border-none ">{category}</div>
                <p className="border-t-2 pt-5 text-xl font-medium">{long_description}</p>

                <div className="flex gap-4">
                    <button  className="btn px-7 bg-transparent">Read</button>
                    <button  className="btn px-7 text-white bg-[#50B1C9]">Wishlist</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BlogDetails;