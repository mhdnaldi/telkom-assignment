import React from "react";
import Button from "../Button/Button";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const modal = (props) => {
  console.log(props.cartData);
  return (
    <React.Fragment>
      <Backdrop />
      <div className='main-modal'>
        <div className='close-modal' onClick={props.closeModal}>
          x
        </div>

        <h3>Berhasil Ditambahkan </h3>
        <div className='modal'>
          <div className='modal-details'>
            {props.cartData.map((el) => (
              <div>
                <img className='modal-img' src={el.image} alt='' />
                <p>{el.name}</p>
              </div>
            ))}
          </div>
          <Button class='btn-see-cart'>Lihat Keranjang</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cartData: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(actions.closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(modal);
