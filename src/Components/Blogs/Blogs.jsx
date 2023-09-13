import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark,handleReadingTime}) => {

    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-3/4">
            <h1 className="text-4xl font-bold">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    handleAddToBookmark={handleAddToBookmark}
                    handleReadingTime={handleReadingTime}
                    key={blog.id} 
                    blog={blog}>

                    </Blog>)
            }
        </div>
    );
};


Blogs.propTypes ={
    handleAddToBookmark:PropTypes.func,
    handleReadingTime:PropTypes.func
}

export default Blogs;