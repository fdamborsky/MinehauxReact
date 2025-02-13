import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import Rent from "./pages/Rent"
import Buy from "./pages/Buy"

const App = () => {
  return( 
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
              <Route index element={<Home/>}></Route>

              <Route path="rent" element={<Rent/>}/>
              <Route path="buy" element={<Buy/>}/>

              <Route path="*" element={<p>Path not resolved</p>} />
        </Route>
      </Routes>
  </BrowserRouter>)
}

export default App