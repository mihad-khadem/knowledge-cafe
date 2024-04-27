import React from "react";
import PropTypes from "prop-types";

import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author_name,
    author_img,
    posting_date,
    reading_time,
    hashtag,
  } = blog;
  return (
    <div className="p-4">
      <img src={cover} alt={title} className="w-400" />

      <div className="flex justify-between">
        {/* Author Container */}
        <div className="flex gap-5 items-center p-4">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div>
            <h3>{author_name}</h3>
            <p>Posted on {posting_date}</p>
          </div>
        </div>
        <div className="p-4 flex gap-2 items-center">
          <h4>{reading_time}minutes read</h4>
          <button>
            <BsBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-[40px] font-bold">{title}</h2>
      <p>{hashtag}</p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
