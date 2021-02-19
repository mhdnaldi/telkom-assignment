import React from "react";
import "./Main.css";
import Card from "../UI/Card/Card";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import * as actions from "../../store/actions/index";

const Main = (props) => {
  let history = useHistory();
  const getItemHandler = (id) => {
    props.getItemById(id);
    setTimeout(() => {
      history.push("/product");
    }, 100);
  };

  let items = null;
  if (props.data) {
    items = props.data.map((el) => (
      <Card
        key={el.id}
        name={el.name}
        price={el.price}
        store={el.store.name}
        img={el.stuff.image_url}
        click={() => getItemHandler(el.id)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    getItemById: (id) => dispatch(actions.getByIdStart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
