/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                toast.success('Sign-out successful', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate('/');
            })
            .catch((error) => {
                toast.success('Sign-out unsuccessful', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    };

    const addClass = isActive =>
        isActive ? 'bg-custom-green-light2 font-semibold underline underline-offset-2' : 'font-semibold';
    const navLinks = <>
        <li><NavLink className={({ isActive }) => addClass(isActive)} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => addClass(isActive)} to="/estates">Estates</NavLink></li>
        <li><NavLink className={({ isActive }) => addClass(isActive)} to="/contact-agent">Contact Agent</NavLink></li>
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
                    <Link to="/" className="text-3xl font-bold text-custom-green-dark">EliteResidences</Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 space-x-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user ?
                            <div className="dropdown dropdown-hover dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-20 rounded-full ring ring-offset-2 ring-custom-green-light">
                                        <img src={user?.photoURL} alt="Profile Img" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt--2 w-52 p-2 shadow">
                                    <li className=' font-semibold text-gray-500 mb-1'>
                                        <p className='bg-custom-green-light2 hover:bg-custom-green-light2'>{user?.displayName}</p>
                                    </li>
                                    <li>
                                        <Link to='/profile'>Profile</Link>
                                    </li>
                                    <li onClick={() => document.getElementById('my_modal_1').showModal()}>
                                        <a> <CiLogout />Sign Out</a>
                                    </li>

                                    {/* Modal for sign-out confirmation */}
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-2xl">Sign Out</h3>
                                            <p className="pt-4 text-lg">Are you sure you want to sign out ?</p>
                                            <div className="modal-action">
                                                <button className="btn bg-red-400 hover:bg-red-500 text-white px-5" onClick={() => {
                                                    handleSignOut();
                                                    document.getElementById('my_modal_1').close();
                                                }}>
                                                    Yes
                                                </button>
                                                <button className="btn bg-custom-green-light hover:bg-custom-green-dark text-white px-5" onClick={() => document.getElementById('my_modal_1').close()}>
                                                    No
                                                </button>
                                            </div>
                                        </div>
                                    </dialog>
                                </ul>
                            </div>
                            :
                            <Link to='/signin' className="btn bg-custom-green-light hover:bg-custom-green-dark text-white font-semibold">
                                Sign In<CiLogin className='text-2xl' />
                            </Link>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;