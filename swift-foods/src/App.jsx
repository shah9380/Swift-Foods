import { useState } from 'react'
import './App.css'
import Home from './Home'
import Quote from './Quote'
import Header from './assets/Header/Header'
import Ratings from './Ratings'
import Restaurants from './assets/Restaurants/Restaurants'
import Footer from './assets/Footer/Footer'
import HeroQuote from './assets/HeroQuote/HeroQuote'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'Quote',
      element: <Quote />,
    },
    {
      path: 'Restaurants',
      element: <Restaurants />,
    },
    {
      path: 'Foods',
      element: <Ratings />,
    },
    {
      path: 'Contact',
      element: <div>
        nothing
      </div>
    }

  ])

  return (
    <>
      <Header></Header>
      <RouterProvider router={route}></RouterProvider>
      <Footer></Footer>
    </>
  )
}

export default App;
