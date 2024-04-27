import React from "react";
import Bookmark from "./Bookmark";
import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-200 rounded-md my-8 p-2">
      <h2 className="text-3xl py-4">Bookmarks </h2>
      <div>
        <h2 className="bg-slate-300 p-2 m-4 rounded-md font-bold">
          Total Time Spent : {readingTime}
        </h2>
      </div>
      <div>
        {bookmarks.map((bookmark, id) => (
          <Bookmark key={id} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};
Bookmarks.propType = {
  bookmarks: PropTypes.object,
};
export default Bookmarks;
