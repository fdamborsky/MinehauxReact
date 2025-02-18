import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../assets/styles/reset.css"
import "../assets/styles/Home.css"
import buyActive from "../assets/images/Buy-active.svg"
import buyUnactive from "../assets/images/Buy-unactive.svg"
import rentUnactive from "../assets/images/Rent-unactive.svg"
import rentActive from "../assets/images/Rent-active.svg"
import Spyglass from "../assets/images/spyglass.png"
import OneHouse from "../components/OneHouse"
import data from "../data/data"
import baratheon from "../assets/images/baratheon.png"
import targaryen from "../assets/images/targaryen.png"
import Westerlands from "../assets/images/Lannisport.png"
import Crownlands from "../assets/images/kings landing.png"
import Vale from "../assets/images/Gullstown.png"
import North from "../assets/images/white_harbour.png"


const Home = () => {
    let [mode, setMode] = useState("buy")
    const [positionArray, setPositionArray] = useState([]);
    const navigate = useNavigate()

    useEffect( () => {
        document.title = "Home Page"

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

          setPositionArray([position0, position1, position2])
    }, [])

    const search = (e, mode) => {
        e.preventDefault()
        window.location.href=`/${mode}`
    }
    
    const toggleButton = (mode) => {
        setMode(mode)
        let rentImage = document.querySelector("#rentImage")
        let buyImage = document.querySelector("#buyImage")
        if(mode === "buy"){
            buyImage.src = buyActive;
            rentImage.src = rentUnactive;
            
        } else if(mode === "rent"){
            buyImage.src = buyUnactive;
            rentImage.src = rentActive;
        }
    }

    document.addEventListener("scroll", (event) => {
        if(window.scrollY > 300 && window.scrollY < 1080){
            document.querySelector('header').style.top = `${-100}px`
        } else {
             document.querySelector('header').style.top = `${0}px`
        }
        
    })

   

    return <>
        <div id="landing-page">
            <div id="container">
                <h1>find your dreAm home</h1>
                <p>From low as 10$ per day with limited time offer discounts</p>

                <div className="toggle-buttons">
                    <button className="toggle-button active" id="buyButton" onClick={()=>   {
                        mode = 'buy'
                        toggleButton(mode)
                        }}>
                        <img src={buyActive} alt="Buy" id="buyImage" />
                    </button>
                    <button className="toggle-button" id="rentButton" onClick={() => {
                        mode = 'rent'
                        toggleButton(mode)
                    }}>
                        <img src={rentUnactive} alt="Rent" id="rentImage" />
                    </button>
                </div>

                <a href="" id="showMeLink" onClick={(e) => search(e, mode)}>
                    <div className ="search">
                    <img src={Spyglass} alt=""/>
                    <h3> Show me !</h3>
                </div></a>
            </div>
        </div>

        <div id="featured">
            <div className="title">
                <h1 className='titleh1'>FEATuREd PRoPERTIES</h1>
                <h2 className='titleh2'>Handpicked properties by our team.</h2>
            </div>
            <div className='boxes'>
            {positionArray.map((onePosition)=>{
                let houseData = data[onePosition];
                return (
                    <Link to={`/minehaux/rooms?id=${houseData.id}`} key={houseData.id} style={{ textDecoration: 'none' }}>
                        <OneHouse {...houseData} />
                    </Link>
                );
            })}
            </div>            
        </div>

        <div id="properties">
        <img class="baratheon" src={baratheon} alt=""/>
        <img class="targaryen" src={targaryen} alt=""/>
        <div id="properties_title">
            <h1>find properties in the westeros</h1>
            <h2>Discover Your Ideal Home Across Multiple Locations</h2>
        </div>

        <div id="cities">
            <div class="city_image1 city_top" onClick={() => navigate("/westerlands")}>
                <img src={Westerlands} alt=""/>
                <div class="city-text">
                <h1>westerlands</h1>
                <h2>5 properties</h2></div>
            </div>

            <div class="city_image2 city_top" onClick={() => navigate("/crownlands")}>
                <img src={Crownlands} alt=""/>
                <div class="city-text">
                <h1>crownlands</h1>
                <h2>12 properties</h2></div>
            </div>

            <div class="city_image2" onClick={() => navigate("/vale")}>
                <img src={Vale} alt=""/>
                <div class="city-text">
                <h1>vale</h1>
                <h2>3 properties</h2></div>
            </div>

            <div class="city_image1" onClick={() => navigate("/north")}>
                <img src={North} alt=""/>
                <div class="city-text">
                <h1>north</h1>
                <h2>7 properties</h2></div>
            </div>
        </div>
        
    </div>

    </>
    }

export default Home