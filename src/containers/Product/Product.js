import React from "react";
import Header from "../../components/Header/Header";
import "./Product.css";

const Product = (props) => {
  return (
    <div>
      <Header />
      <div className='product'>
        <div className='product-img'>
          <div className='img-big'></div>
          <div className='img-small'>
            <div className='small'></div>
            <div className='small'></div>
            <div className='small'></div>
            <div className='small'></div>
            <div className='small'></div>
          </div>
        </div>
        <div className='product-details'></div>
      </div>
      <div className='checkout-footer'></div>
    </div>
  );
};
export default Product;
