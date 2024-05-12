import PropTypes from 'prop-types'
import UseAuth from '../../hooks/UseAuth';
import toast from 'react-hot-toast';
const BlogCard = ({ blog }) => {
    const { user, addWishlist } = UseAuth()
    const { title, photoURL, category, short_description } = blog;
    const data =
    {
        title,
        photoURL,
        category,
        short_description,
        user_email: user?.email,

    }
    const handleAddWishlist = () => {
        addWishlist(data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Added to wishlist')
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }
    return (
        <div className="card  bg-base-100 dark:bg-[#0a0e14] shadow-xl p-5 border">
            <figure><img src={photoURL} className="md:h-[280px] w-full object-cover  rounded-lg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">
                    {title}
                </h2>
                <div className="badge bg-[#06d6a0] border-none ">{category}</div>
                <p>{short_description}</p>
                <div className="card-actions justify-end">
                    <div onClick={handleAddWishlist} className=" py-1 px-4 rounded-xl hover:cursor-pointer bg-primary-color text-white hover:bg-[#10a5ca]">Wishlist</div>
                    <div className=" py-1 px-4 rounded-xl bg-[#073b4c] text-white hover:cursor-pointer hover:bg-[#145265]">Details</div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
BlogCard.propTypes = {
    blog: PropTypes.object,
}