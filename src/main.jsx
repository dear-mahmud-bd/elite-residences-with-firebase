/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import AllEstates from './components/Estates/AllEstates.jsx';
import fetchEstatesData from './utility/fetchEstatesData.js';
import EstateDetails from './components/Estates/EstateDetails.jsx';
import NotFound from './components/Shared/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/estates", element: <AllEstates></AllEstates>, loader: fetchEstatesData },
      { path: "/estates/:id", element: <EstateDetails></EstateDetails>, loader: fetchEstatesData },

      { path: "/contact-agent", element: <h1>Hello This is Contact Agent...</h1> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
