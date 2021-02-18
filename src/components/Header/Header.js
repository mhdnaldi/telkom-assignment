import React from "react";
import "./header.css";

import Logo from "../UI/Logo/Logo";
import Input from "../UI/Input/Input";
import Route from "../UI/Route/Route";

const header = (props) => {
  return (
    <div className='header'>
      <Logo />
      <p style={{ fontSize: "13px" }}>Kategori</p>
      <Input />
      <Route />
    </div>
  );
};

export default header;
