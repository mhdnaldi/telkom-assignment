import React from "react";
import "./Input.css";
import searchLogo from "../../../assets/images/search.png";

const input = (props) => {
  return (
    <div className='input'>
      <input type='text' placeholder='Search' />
      <div className='search-img'>
        <img src={searchLogo} />
      </div>
    </div>
  );
};

export default input;
