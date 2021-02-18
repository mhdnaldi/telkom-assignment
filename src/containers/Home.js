import React from "react";
import "./Home.css";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Main from "../components/Main/Main";
import Filter from "../components/Filter/Filter";

const Home = (props) => {
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

export default Home;
