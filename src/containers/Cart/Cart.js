import React from "react";
import "./Cart.css";
import { connect } from "react-router-dom";
import Header from "../../components/Header/Header";
import Button from "../../components/UI/Button/Button";

const Cart = (props) => {
  return (
    <div>
      <Header />
      <div className='main-cart'>
        <div className='cart-details'>
          <div className='cart-details-header'>
            <p>Pilih Semua Produk</p>
            <strong>Hapus</strong>
          </div>
          <div className='cart-details-info'>
            <div className='store-info'>
              <img
                src='https://ecs7.tokopedia.net/img/autocomplete/ic_pm.png'
                alt=''
              />
              <p>Store name</p>
            </div>
            <div className='item-info'>
              <div className='item-img'></div>
              <div>
                <p>Nama Item</p>
                <strong>Rp. 200.000</strong>
              </div>
            </div>
            <div className='item-config'>
              <p>Tulis Catatan untuk Toko</p>
              <div className='configuration'></div>
            </div>
          </div>
        </div>
        <div className='cart-checkout'>
          <div>
            <strong>Ringkasan Belanja</strong>
          </div>
          <div className='cart-total-price'>
            <div>
              <p>Total Harga</p>
            </div>
            <div>
              <strong>Rp. 200.000</strong>
            </div>
          </div>
          <Button class='btn-checkout'>Beli(3)</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
