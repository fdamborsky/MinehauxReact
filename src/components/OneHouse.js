import React from 'react'
import "../assets/styles/reset.css"
import "../assets/styles/OneHouse.css";
import compass from "../assets/images/compass.webp"

const OneHouse = (props) => {
  const currentDate = new Date()
  const postedDate = new Date(props.posted)
  let dateDifference = currentDate.getTime() - postedDate.getTime()
  let timeSince = ""

  dateDifference = Math.round(dateDifference/ (1000*3600*24))
  

  if(dateDifference>365){
    timeSince = `${Math.floor((dateDifference/=365))} years ago`
  } else if(dateDifference>31 && dateDifference<=365){
    timeSince = `${Math.floor((dateDifference/=31))} months ago`
  } else if(dateDifference<=31 && dateDifference > 7){
    timeSince = `${Math.floor((dateDifference/=7))} weeks ago`
  } else if(dateDifference<=7){
    timeSince = `${dateDifference} days ago`
  }

  return (
    
    
    <div className='box'>
        <img src={props.image} alt="" />

        <h1>{props.category}</h1>

        <p>{props.name}</p>

        <div className='position'>
          <img src={compass} alt="" />
          <p>{props.position}</p>
        </div>
        <div className='information'>
            <p>Beds: {props.beds}</p>
            <p>Bathrooms: {props.bathrooms}</p>
            <p>Chests: {props.chests}</p>
        </div>

        <div className='author'>

            <p><img src={props.authorImage} alt="" />{props.author}</p>
            <p>{timeSince}</p>
        </div>
    </div>
  )
}

export default OneHouse