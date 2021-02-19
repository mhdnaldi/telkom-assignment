import React from "react";
import "./Card.css";

const cart = (props) => {
  return (
    <div className='card' onClick={props.click}>
      <img className='card-image' src={props.img} />
      <div className='card-title'>{props.name}</div>
      <div className='card-price'>Rp. {props.price}</div>
      <div className='card-market'>{props.store}</div>
    </div>
  );
};

export default cart;
