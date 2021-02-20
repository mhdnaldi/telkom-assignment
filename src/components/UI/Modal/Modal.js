import React from "react";
import Button from "../Button/Button";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../../store/actions/index";

const Modal = (props) => {
  let history = useHistory();
  const toCartPageHandler = () => {
    history.push("/cart");
    props.closeModal();
  };
  return (
    <React.Fragment>
      <Backdrop />
      <div className='main-modal'>
        <div className='close-modal' onClick={props.closeModal}>
          x
        </div>

        <h3>Berhasil Ditambahkan </h3>
        {props.cartData.map((el) => (
          <div className='modal' key={Math.random()}>
            <div className='modal-details'>
              <img className='modal-img' src={el.image} alt='' />
              <p>{el.name}</p>
            </div>
            <Button click={() => toCartPageHandler()} class='btn-see-cart'>
              Lihat Keranjang
            </Button>
          </div>
        ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
