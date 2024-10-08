/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Navbar from './components/Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Shared/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 w-full z-10 shadow-md">
          <Navbar></Navbar>
        </header>

        <main className="flex-grow mt-20">
          <div className="container max-w-7xl mx-auto p-4">
            <Outlet></Outlet>
          </div>
          <ToastContainer />
        </main>

        <footer className="mt-auto bg-custom-green-light w-full">
          <Footer></Footer>
        </footer>
      </div>
    </>
  )
}

export default App
