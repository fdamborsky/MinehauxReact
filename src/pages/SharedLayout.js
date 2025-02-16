import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const SharedLayout = () => {
  return <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
  </>
}

export default SharedLayout