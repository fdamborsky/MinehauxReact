import React from 'react'
import OneHouse from "../components/OneHouse"
import data from "../data/data"

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let position0 = getRandomInt(0,4)
let position1 = getRandomInt(0,4)
let position2 = getRandomInt(0,4)
while(position1 === position0){
    position1 = getRandomInt(0,4)
}
while(position2 === position0 || position2 === position1){
  position2 = getRandomInt(0,4)
}
let positionArray = [position0, position1, position2]


const Buy = () => {
  return (
    <div className='boxes'>
      {positionArray.map((onePosition)=>{
        let houseData = data[onePosition];
        return <OneHouse {...houseData} key={houseData.id}/>
      })}
    </div>
  );
};

export default Buy;
// {data.map((oneHouse) => (
//         
//       ))}