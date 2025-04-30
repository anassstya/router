import { useState } from 'react'
import './App.css'
import Menu from "./Menu/Menu.jsx";
import Crud from "./CRUD/Crud.jsx";
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/menu',
        element: <Menu/>
    },
    {
        path: '/crud',
        element: <Crud/>

    }
])

export default function App() {
  return (
      <div className={'container'}>
          <Link to='/menu'>Menu</Link>
          <Link to='/crud'>CRUD</Link>
          <Link to='/'>Назад</Link>
      </div>
  )
}

