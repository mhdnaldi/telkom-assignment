import React from "react";
import "./Filter.css";

const filter = (props) => {
  return (
    <div className='filter'>
      <div>
        <p>
          Menampilkan 20 produk (<strong>1-20</strong> dari <strong>100</strong>
          )
        </p>
      </div>
      <div>
        <strong>Urutkan:</strong>
        <select>
          <option>Paling Sesuai</option>
          <option>Harga Terendah</option>
          <option>Harga Tertinggi</option>
        </select>
      </div>
    </div>
  );
};

export default filter;
