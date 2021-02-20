import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Product.css";
import { connect } from "react-redux";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import * as actions from "../../store/actions/index";

const Product = (props) => {
  let [itemName, setItemName] = useState([props.dataById.name]);

  const setColorHandler = (color) => {
    let newColor = [];
    newColor.push(` - ${color}`);
    if (itemName.length > 1) {
      itemName.pop();
      setItemName(itemName.concat(newColor[newColor.length - 1]));
    } else {
      setItemName(itemName.concat(newColor[newColor.length - 1]));
    }
  };

  const setSizeHandler = (size) => {
    let newSize = [];
    newSize.push(`, ${size}`);
    if (itemName.length > 2) {
      itemName.pop();
      setItemName(itemName.concat(newSize[newSize.length - 1]));
    } else {
      setItemName(itemName.concat(newSize[newSize.length - 1]));
    }
  };

  let smallImage = [];
  let variantColor = null;
  let variantSize = null;
  for (let i = 0; i < 5; i++) {
    smallImage.push(props.dataById.stuff.image_url);
  }

  variantColor = props.dataById.variants.color.map((el) => (
    <div
      className='variant-colors'
      key={Math.random()}
      onClick={() => setColorHandler(el)}>
      {el}
    </div>
  ));

  variantSize = props.dataById.variants.size.map((el) => (
    <div key={Math.random()} onClick={() => setSizeHandler(el)}>
      {el}
    </div>
  ));

  smallImage = smallImage.map((el) => (
    <img className='small' src={el} key={Math.random()} alt='' />
  ));

  const addToCartHandler = () => {
    const cart = {
      id: props.dataById.id,
      name: itemName.join(""),
      price: props.dataById.price,
      image: props.dataById.stuff.image_url,
      store: props.dataById.store.name,
      qty: 1,
    };
    props.addToCart(cart);
  };

  return (
    <div>
      {props.showModal && <Modal />}
      <Header />
      <div className='product'>
        <div className='product-img'>
          <img
            className='img-big'
            src={props.dataById.stuff.image_url}
            alt=''
          />
          <div className='img-small'>{smallImage}</div>
        </div>
        <div className='product-details'>
          <h3 style={{ color: "black" }}>{itemName}</h3>
          <div className='product-price product-info'>
            <p>HARGA</p>
            <strong>Rp.{props.dataById.price}</strong>
          </div>
          <div className='product-colors product-info'>
            <p>WARNA</p>
            <div className='product-variant'>
              <p>Pilih variant</p>
              <div className='variants'>{variantColor}</div>
            </div>
          </div>
          <div className='product-size product-info'>
            <p>UKURAN</p>
            <div className='product-variant'>
              <p>Pilih variant</p>
              <div className='variants'>{variantSize}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='checkout-footer'>
        <Button click={() => addToCartHandler()} class='btn-add-to-cart'>
          Tambah Ke Keranjang
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataById: state.dataById,
    showModal: state.showModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(actions.addToCart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
