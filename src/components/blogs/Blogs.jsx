import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmark }) => {
  // State to store the incoming data
  const [blogs, setBlogs] = useState([]);
  // Effect
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  //   console.log(blogs);

  return (
    <div className="md:w-2/3">
      <h2 className="text-3xl py-4">Blogs </h2>

      <div>
        {blogs.map((blog, id) => (
          <Blog key={id} blog={blog} handleBookmark={handleBookmark} />
        ))}
      </div>
    </div>
  );
};
Blogs.propTypes = {
  handleBookmark: PropTypes.func,
};

export default Blogs;
