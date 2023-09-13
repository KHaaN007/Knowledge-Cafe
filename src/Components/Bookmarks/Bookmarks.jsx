import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks,readingTime }) => {
    // console.log(bookmarks);
    return (
        <div className="w-1/4 bg-slate-200 p-10 rounded-xl">
            <h1>Spending Time : {readingTime}</h1>
            <h1 className="text-4xl font-bold text-center">Bookmark : {bookmarks.length}</h1>
            {
               bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.func
}

export default Bookmarks