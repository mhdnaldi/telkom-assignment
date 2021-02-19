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
        <div className='product-details'>
          <h3>TITLE</h3>
          <div className='product-price product-info'>
            <p>HARGA</p>
            <strong>Rp. 200.000</strong>
          </div>
          <div className='product-colors product-info'>
            <p>WARNA</p>
            <div className='product-variant'>
              <p>Pilih variant</p>
              <div className='variants'>
                <div className='variant-colors'>Hijau</div>
                <div className='variant-colors'>Abu-abu</div>
                <div className='variant-colors'>Coklat</div>
                <div className='variant-colors'>Putih</div>
                <div className='variant-colors'>Biru</div>
              </div>
            </div>
          </div>
          <div className='product-size product-info'>
            <p>UKURAN</p>
            <div className='product-variant'>
              <p>Pilih variant</p>
              <div className='variants'>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='checkout-footer'></div>
    </div>
  );
};
export default Product;
