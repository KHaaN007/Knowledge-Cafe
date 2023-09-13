import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    const {title}=bookmark;
  return (
    <div>
        <h1 className='text-3xl mt-10 shadow-2xl p-8 rounded-xl'>{title}</h1>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark:PropTypes.object
}

export default Bookmark