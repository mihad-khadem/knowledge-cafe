import { useState } from "react";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  //  Handle add to bookmark
  const handleBookmark = (blog) => {
    // console.log("Adding Soon", blog);
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };
  //add  reading time
  const addReadingTime = (time, id) => {
    // console.log("adding time", time);
    console.log(id);
    const timeInt = parseInt(time);
    console.log(timeInt, time);
    const newReadingTime = readingTime + timeInt;
    setReadingTime(newReadingTime);
    const remainingBookmark = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmark);
  };
  return (
    <>
      <div className="max-w-5xl mx-auto py-3">
        <Header />
        <div className="md:flex justify-between">
          <Blogs
            handleBookmark={handleBookmark}
            addReadingTime={addReadingTime}
          />
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
        </div>
      </div>
    </>
  );
}

export default App;
