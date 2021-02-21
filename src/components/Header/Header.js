import React from "react";
import "./header.css";

import Logo from "../UI/Logo/Logo";
import Input from "../UI/Input/Input";
import Navigation from "../UI/Navigation/Navigation";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  let history = useHistory();
  const homePageHandler = () => {
    history.push("/");
  };

  return (
    <div className='header' onClick={() => homePageHandler()}>
      <Logo />
      <p>Kategori</p>
      <Input />
      <Navigation />
      <div className='burger-menu'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
