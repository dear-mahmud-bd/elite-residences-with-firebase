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
import SignUp from './components/SignUpSignIn/SignUp.jsx';
import SignIn from './components/SignUpSignIn/SignIn.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import UserProfile from './components/SignUpSignIn/UserProfile.jsx';
import ContactAgent from './components/ContactAgent/ContactAgent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/estates", element: <AllEstates></AllEstates>, loader: fetchEstatesData },
      { path: "/estates/:id", element: <EstateDetails></EstateDetails>, loader: fetchEstatesData },

      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/signin", element: <SignIn></SignIn> },
      { path: "/profile", element: <UserProfile></UserProfile> },

      { path: "/contact-agent", element: <ContactAgent></ContactAgent> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
