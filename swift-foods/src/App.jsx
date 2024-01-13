import { useState } from 'react'
import './App.css'
import Home from './Home'
import Quote from './Quote'
import Header from './assets/Header/Header'
import Ratings from './Ratings'
import Restaurants from './assets/Restaurants/Restaurants'
import Footer from './assets/Footer/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <Restaurants></Restaurants>
      <Footer></Footer>
    </>
  )
}

export default App;
