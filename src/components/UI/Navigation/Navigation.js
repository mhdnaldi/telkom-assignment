import React from "react";
import "./Navigation.css";

import bell from "../../../assets/images/bell.png";
import email from "../../../assets/images/mail.png";
import market from "../../../assets/images/market.png";
import shoppingCart from "../../../assets/images/shopping-cart.png";

const navigation = (props) => {
  return (
    <div className='route'>
      <div className='route-icon'>
        <div className='notif'>1</div>
        <img src={shoppingCart} />
      </div>
      <div className='route-icon'>
        <div className='notif'>2</div>
        <img src={bell} />
      </div>
      <div className='route-icon'>
        <div className='notif'>3</div>
        <img src={email} />
      </div>
      <div className='route-icon-market'>
        <img src={market} />
        <p>Toko</p>
      </div>
      <div className='route-icon-profile'>
        <div className='profile-image'></div>
        <p>Muhammad</p>
      </div>
    </div>
  );
};

export default navigation;
