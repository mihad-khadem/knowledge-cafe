import React from "react";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
      <hr />
    </div>
  );
};

export default Header;
