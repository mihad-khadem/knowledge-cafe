import { useState } from "react";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  //  Handle add bookmark
  const handleBookmark = (blog) => {
    // console.log("Adding Soon", blog);
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };
  return (
    <>
      <div className="max-w-5xl mx-auto py-3">
        <Header />
        <div className="md:flex justify-between">
          <Blogs handleBookmark={handleBookmark} />
          <Bookmarks bookmarks={bookmarks} />
        </div>
      </div>
    </>
  );
}

export default App;
