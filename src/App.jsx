import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) => {
    // console.log(blog);
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
    // console.log(blog);
  }


  const handleReadingTime = (id,time) => {
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
    // Remove Data 
    console.log('remove bookmark',id)
    const remainingBookmarks =bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)

  }



  return (
    <>
      <div>
        <Header></Header>
        <div className='flex w-3/4 mx-auto gap-10'>
          <Blogs
            handleReadingTime={handleReadingTime}
            handleAddToBookmark={handleAddToBookmark}>
          </Blogs>
          <Bookmarks 
            readingTime={readingTime}
          bookmarks={bookmarks}>
          </Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
