import { useState } from 'react'
import './App.css'
import Home from './Home'
import Quote from './Quote'
import Food from './assets/Food/Food';
import Restaurants from './assets/Restaurants/Restaurants'
import Ratings from './Ratings';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
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
          element: <Ratings />,
        },
        {
          path: 'Foods',
          element: <Food />,
        },
        {
          path: 'Contact',
          element: <div style={{margin: "auto", width: "fit-content",height: "40vh", padding: "100px"}}>
                <p>Name: Shah Misbahul Islam</p>
                <p>contact : shahislam9380@gmail.com</p>
          </div>
        }
      ]
    }
  ])

  return (
    <div className="app">
      <RouterProvider router={route}>
      
      </RouterProvider>
    </div>
  )
}

export default App;
