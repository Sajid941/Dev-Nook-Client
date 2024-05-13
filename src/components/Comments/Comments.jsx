import moment from 'moment';
import PropTypes from 'prop-types'
const Comments = ({ comment }) => {
    console.log(comment);
    const commentDate = moment(comment.formatDate, "YYYYMMDDHHmmss").fromNow();
    console.log(commentDate);
    return (
        <div className='bg-[#f9fafb] p-5 rounded-xl border dark:bg-[#0a0e14] space-y-3 lg:ml-16'>
            <div className='flex gap-2 items-center'>
                <div className="avatar">
                    <div className="w-10 h-10 rounded-full">
                        <img src={comment.user_photoURL} />
                    </div>
                </div>
                <div>
                    <p className=''>{comment.user_name}</p>
                    <p className='text-xs'>{commentDate}</p>
                </div>
            </div>
            <div>
                <p className='text-[#747474]'>{comment.comment}</p>
            </div>
        </div>
    );
};

export default Comments;
Comments.propTypes = {
    comment: PropTypes.object
}