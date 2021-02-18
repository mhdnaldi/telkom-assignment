import React from "react";
import "./Card.css";

const cart = (props) => {
  return (
    <div className='card'>
      <div className='card-image'></div>
      <div className='card-title'>TITLE</div>
      <div className='card-price'>Rp. 123123</div>
      <div className='card-market'>TOKO</div>
    </div>
  );
};

export default cart;
