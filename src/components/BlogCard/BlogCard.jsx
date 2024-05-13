import PropTypes from 'prop-types'
import UseAuth from '../../hooks/UseAuth';
import toast from 'react-hot-toast';
import moment from 'moment'
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { user, addWishlist } = UseAuth()
    const { _id, title, image, category, short_description } = blog;

    const date = moment().subtract(10, 'days').calendar();
    const time = moment().format('LT');
    const data =
    {
        id: _id,
        title,
        image,
        category,
        short_description,
        user_email: user?.email,
        date,
        time

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
            <figure><img src={image} className="md:h-[280px] w-full object-cover  rounded-lg" alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">
                    {title}
                </h2>
                <div className="badge bg-[#06d6a0] border-none ">{category}</div>
                <p>{short_description}</p>
                <div className="card-actions justify-end">
                    <div onClick={handleAddWishlist} className=" py-1 px-4 rounded-xl hover:cursor-pointer bg-primary-color text-white hover:bg-[#10a5ca]">Wishlist</div>
                    <Link to={`/blogDetails/${_id}`} className=" py-1 px-4 rounded-xl bg-[#073b4c] text-white hover:cursor-pointer hover:bg-[#145265]">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
BlogCard.propTypes = {
    blog: PropTypes.object,
}