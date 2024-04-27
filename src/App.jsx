import { useState } from "react";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);
  console.log("app => bookmark", bookmark);
  return (
    <>
      <div className="max-w-5xl mx-auto py-3">
        <Header />
        <div className="md:flex justify-between">
          <Blogs />
          <Bookmarks />
        </div>
      </div>
    </>
  );
}

export default App;
