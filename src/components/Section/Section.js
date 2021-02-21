import React from "react";
import "./Section.css";

import catalog from "../../assets/images/open-book.png";
import market from "../../assets/images/market.png";
import profile from "../../assets/images/user.png";
import product from "../../assets/images/gift.png";

const section = (props) => {
  return (
    <div className='section'>
      <div className='section-page'>
        <img src={product} alt='' />
        <p>Produk</p>
      </div>
      <div className='section-page'>
        <img src={market} alt='' />
        <p>Toko</p>
      </div>
      <div className='section-page'>
        <img src={profile} alt='' />
        <p>Profil</p>
      </div>
      <div className='section-page'>
        <img src={catalog} alt='' />
        <p>Katalog</p>
      </div>
    </div>
  );
};

export default section;
