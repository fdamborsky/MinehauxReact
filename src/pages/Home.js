import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    useEffect( () => {
        document.title = "Home Page"
    }, [])

    return <>
        <h1>Home</h1>
        <Link to="/rent">Rent</Link><br />
        <Link to="/buy">Buy</Link>
    </>
    }

export default Home