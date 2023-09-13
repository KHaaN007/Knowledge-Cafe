import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
    console.log(blog);
    const { id, cover, author, author_img, posted_date, reading_time, hashtags, description } = blog;
    return (
        <div className='my-10 items-center'>
            <img className='w-full rounded-xl' src={cover} alt="" />
            <div className='lg:flex my-5 justify-between'>
                <div className='flex items-center'>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <h4>{posted_date}</h4>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='text-xl'>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookmark(blog)}>{<FaBookmark></FaBookmark>}</button>
                </div>
            </div>
            <h1 className='lg:text-3xl font-semibold my-5'>{description}</h1>
            {
                hashtags.map((hash, index) => <span className='mx-2' key={index}><a href="">#{hash}</a></span>)
            }
            <br />
            <button onClick={() => handleReadingTime(id, reading_time)}
                className='text-2xl text-purple-800'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blog;