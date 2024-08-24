/* eslint-disable no-unused-vars */
import React from 'react';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const addClass = isActive =>
        isActive ? 'bg-custom-green-light2 font-semibold underline underline-offset-2' : 'font-semibold';
    const navLinks = <>
        <li><NavLink className={({ isActive }) => addClass(isActive)} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => addClass(isActive)} to="/estates">Estates</NavLink></li>
        <li><NavLink className={({ isActive }) => addClass(isActive)} to="/contact-us">Contact Us</NavLink></li>
    </>

    return (
        <nav className='container max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm bg-base-100 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <NavLink to="/" className="text-2xl font-bold text-custom-green-dark">EliteResidences</NavLink>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 space-x-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <button className="btn bg-custom-green-light hover:bg-custom-green-dark text-white font-semibold">
                        Sign In<CiLogin className='text-2xl' />
                    </button>
                    <div className="dropdown dropdown-hover dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-20 rounded-full ring ring-offset-2 ring-custom-green-light">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Profile Img" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt--2 w-52 p-2 shadow">
                            <li><a>Profile</a></li>
                            <li><a> <CiLogout />Sign Out</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;