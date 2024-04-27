import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-400 p-4 m-4 rounded-md">
      <h2>{title}</h2>
    </div>
  );
};
Bookmark.propType = {
  bookmark: PropTypes.object,
};

export default Bookmark;
