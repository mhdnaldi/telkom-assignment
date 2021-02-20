import React from "react";
import "./Card.css";

const cart = (props) => {
  return (
    <div className='card' onClick={props.click}>
      <img className='card-image' src={props.img} alt='' />
      <div className='card-title'>{props.name}</div>
      <div className='card-price'>
        {props.price.toLocaleString("id", {
          style: "currency",
          currency: "IDR",
        })}
      </div>
      <div className='card-market'>
        <img
          src='https://ecs7.tokopedia.net/img/autocomplete/ic_pm.png'
          alt=''
        />
        {props.store}
      </div>
    </div>
  );
};

export default cart;
