import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";

const BlogDetails = () => {
    const { user } = useAuth()
    const blog = useLoaderData()
    const {_id, title, image, category, short_description, long_description,user_email } = blog;

    const date = moment().format('YYYYMMDD')

    const handlePostComment =e =>{
        const comment = e.target.comment.value;
        e.preventDefault();
        const commentData ={
            id:_id,
            user_name:user.displayName,
            user_photoURL:user.photoURL,
            comment,
            formatDate:date
        }
        if(user_email === user.email){
            return toast.error('Can not comment on own blog')
        }
        else{
            axios.post('http://localhost:3000/comments',commentData)
            .then(res => {
                if(res.data.insertedId){
                    toast.success('Comment posted')
                    e.target.reset()
                }
            })
            .catch(error =>{
                toast.error(error.message)
            })
        }

    }
    return (
        <div className="pt-20">
            <div className="lg:flex  lg:p-10 p-5   items-center">
                <img className="lg:ml-10 lg:w-[425px] rounded-lg  " src={image} alt="" />
                <div className="w-full lg:ml-10 space-y-4 lg:pl-5 lg:border-l-2">
                    <h1 className="text-4xl font-bold ">{title}</h1>
                    <p className=""><span className="font-bold"></span> {short_description}</p>
                    <div className="badge bg-[#06d6a0] border-none text-[#181818] ">{category}</div>
                    <p className="border-t-2 pt-5 text-xl font-medium">{long_description}</p>
                </div>
            </div>
            <div className="px-5 md:px-10 lg:px-20 my-10">
                <div className="border-b-2 pb-5">
                    <h4 className="text-3xl font-bold">2 C O M M E N T S</h4>
                </div>
                <div className="my-8 flex justify-start gap-3">
                    <div className="avatar">
                        <div className="w-12 h-12 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <form onSubmit={handlePostComment} className="w-full">
                        <textarea name="comment" className="textarea textarea-bordered w-full focus:outline-none" rows={5} placeholder="Write a comment..."></textarea>
                        <button className="btn bg-[#1a485f] text-white hover:bg-[#1a5770]">Post Comment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;