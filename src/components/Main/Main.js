import React from "react";
import "./Main.css";
import Card from "../UI/Card/Card";
import { connect } from "react-redux";

const main = (props) => {
  let items = null;
  if (props.data) {
    items = props.data.map((el) => (
      <Card
        key={el.id}
        name={el.name}
        price={el.price}
        store={el.store.name}
        img={el.stuff.image_url}
      />
    ));
  }

  return <div className='main-all-products'>{items}</div>;
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(main);
