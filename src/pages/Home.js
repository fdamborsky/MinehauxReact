import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../assets/styles/reset.css"
import "../assets/styles/Home.css"
import buyActive from "../assets/images/Buy-active.svg"
import buyUnactive from "../assets/images/Buy-unactive.svg"
import rentUnactive from "../assets/images/Rent-unactive.svg"
import rentActive from "../assets/images/Rent-active.svg"
import Spyglass from "../assets/images/spyglass.png"

const Home = () => {
    let mode = 'buy'
    useEffect( () => {
       
        document.title = "Home Page"
    }, [])

    const search = (e, mode) => {
        e.preventDefault()
        window.location.href=`/${mode}`
    }
    
    const toggleButton = (mode) => {
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
        {/* <Link to="/rent">Rent</Link><br />
        <Link to="/buy">Buy</Link> */}
    </>
    }

export default Home