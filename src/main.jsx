import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import HomePage from "./Menu/HomePage.jsx";
import DriftPage from "./Menu/DriftPage.jsx";
import ForzaPage from "./Menu/ForzaPage.jsx";
import TimeAttackPage from "./Menu/TimeAttackPage.jsx";
import Menu from "./Menu/Menu.jsx";
import Crud from "./CRUD/Crud.jsx";

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

    },
    {
        path: '/menu/home',
        element: <HomePage/>,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: '/menu/drift',
        element: <DriftPage/>,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: '/menu/forza',
        element: <ForzaPage/>,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: '/menu/timeattack',
        element: <TimeAttackPage/>,
        errorElement: <div>404 Not Found</div>
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
        <RouterProvider router={router}/>
   </React.StrictMode>
);