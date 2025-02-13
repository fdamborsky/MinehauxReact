import React from 'react'
import OneHouse from "../components/OneHouse"
import data from "../data/data"

const Buy = () => {
  return (
    <div className='boxes'>
      {data.map((oneHouse) => (
        <OneHouse {...oneHouse} key={oneHouse.id}/>
      ))}
    </div>
  );
};

export default Buy;
