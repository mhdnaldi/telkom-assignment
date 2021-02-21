import React, { useState, useEffect } from "react";
import "./Cart.css";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import Button from "../../components/UI/Button/Button";
import trash from "../../assets/images/trash.png";
import heart from "../../assets/images/heart.png";
import * as actions from "../../store/actions/index";
import check from "../../assets/images/check.png";

const Cart = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (props.cartData.length < 1) {
      setQuantity(0);
      setTotalPrice(0);
    }
    if (props.cartData.length > 0) {
      let qty = props.cartData.map((el) => el.qty).reduce((el, i) => el + i);
      setQuantity(qty);
      let total = props.cartData
        .map((el) => el.price * el.qty)
        .reduce((el, i) => el + i);
      setTotalPrice(
        total.toLocaleString("id", {
          style: "currency",
          currency: "IDR",
        })
      );
    }
  }, [props.cartData]);

  let cartItem = <p className='empty-cart'>CART IS EMPTY</p>;
  if (props.cartData.length > 0) {
    cartItem = props.cartData.map((el, i) => (
      <div className='cart-details-info' key={Math.random()}>
        <div className='store-info'>
          <div
            className='selected'
            onClick={(event) => props.isSelectedHandler(el.id, event)}>
            {el.checked && <img className='is-selected' src={check} alt='' />}
          </div>
          <img
            src='https://ecs7.tokopedia.net/img/autocomplete/ic_pm.png'
            alt=''
          />
          <p>{el.store}</p>
        </div>
        <div className='item-info'>
          <img className='item-img' src={el.image} alt='' />
          <div>
            <p style={{ color: "#111", fontSize: "13px" }}>
              {el.name}
              {el.color}
              {el.size}
            </p>
            <strong>
              {el.price.toLocaleString("id", {
                style: "currency",
                currency: "IDR",
              })}
            </strong>
          </div>
        </div>
        <div className='item-config'>
          <p>Tulis Catatan untuk Toko</p>
          <div className='configuration'>
            <img src={heart} alt='' />
            <img
              src={trash}
              alt=''
              onClick={() => props.removeFromCart(el.id)}
            />
            <div className='dec' onClick={() => props.decrement(i)}>
              <p onClick={() => props.decrement(i)}>-</p>
            </div>
            <div className='qty'>{el.qty}</div>
            <div className='inc' onClick={() => props.increment(i)}>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <Header />
      <div className='main-cart'>
        <div className='cart-details'>
          <div className='cart-details-header'>
            <p>Pilih Semua Produk</p>
            <strong onClick={() => props.removeAllCartItems()}>Hapus</strong>
          </div>
          {cartItem}
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
              <strong>{totalPrice}</strong>
            </div>
          </div>
          <Button class='btn-checkout'>Beli ({quantity})</Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartData: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (id) => dispatch(actions.increment(id)),
    decrement: (id) => dispatch(actions.decrement(id)),
    removeFromCart: (id) => dispatch(actions.removeFromCart(id)),
    removeAllCartItems: () => dispatch(actions.removeAllCartItems()),
    isSelectedHandler: (id, event) => dispatch(actions.isSelected(id, event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
