import React, { useEffect } from "react";
import "./Home.css";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Main from "../components/Main/Main";
import Filter from "../components/Filter/Filter";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const Home = (props) => {
  useEffect(() => {
    props.fetchStart();
  }, []);

  return (
    <div className='home'>
      <Header />
      <div className='home-container'>
        <div></div>
        <div>
          <Section />
          <Filter />
          <Main />
        </div>
        <div></div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStart: () => dispatch(actions.fetchStart()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
