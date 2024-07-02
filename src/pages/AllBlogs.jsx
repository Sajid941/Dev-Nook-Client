import BlogCard from "../components/BlogCard/BlogCard";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from 'framer-motion';

const AllBlogs = () => {
    const loadedBlogs = useLoaderData()
    const [blogs, setBlogs] = useState(loadedBlogs)
    const handleSearch = e => {
        e.preventDefault()
        const search_text = e.target.search_text.value;
        if (search_text == "") {
            setBlogs(loadedBlogs)
        }
        else {
            axios(`https://a11-dev-nook-server.vercel.app/search?text=${search_text}`)
                .then(res => {
                    setBlogs(res.data)
                })
                .catch(error => {
                    toast.error(error.message)
                })
        }
    }
    return (
        <motion.div className="pt-16"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div>
                <div className="h-20 w-full bg-gradient-to-l to-[#d1f6fc] via-[#a2f8d6] from-[#a9ecf8]">

                    <form onSubmit={handleSearch} className="md:max-w-lg mx-auto px-5 md:px-0 pt-12">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" name="search_text" className="block w-full p-4 px-10 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none shadow-lg" placeholder="Search..." />
                            {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-primary-color   focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ">Search</button> */}
                            <select name="filter" className=" focus:outline-none border-none text-[#747474] bg-none absolute end-2.5 bottom-2  font-medium rounded-lg text-sm px-2 py-2 ">
                                <option defaultValue="Technology" disabled selected>Filter</option>
                                <option>Technology</option>
                                <option>Web Development</option>
                                <option>Programming</option>
                                <option>Python</option>
                            </select>

                        </div>
                    </form>

                </div>
            </div>
            <div className="md:grid md:grid-cols-2 my-20 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-6 space-y-6 md:space-y-0">
                {
                    blogs.length == 0 ?
                        <p className="text-3xl font-bold col-span-3 text-center">No Result Found</p> :
                        blogs.map((blog, idx) => <BlogCard key={idx} blog={blog} />)
                }
            </div>
        </motion.div>
    );
};

export default AllBlogs;