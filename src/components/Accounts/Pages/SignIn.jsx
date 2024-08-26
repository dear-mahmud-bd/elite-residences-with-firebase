/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Others from './Others';

const SignIn = () => {
    return (
        <div className="my-0 sm:my-10 lg:w-1/2 xl:w-5/12 mx-auto">
            <h1 className="text-3xl xl:text-4xl font-extrabold text-center mb-5">Sign In</h1>

            <div className="mx-auto max-w-md">
                <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email" placeholder="Email" />
                <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password" placeholder="Password" />
                <button
                    className="mt-5 tracking-wide font-semibold bg-custom-green-light text-gray-100 w-full py-4 rounded-lg hover:bg-custom-green-dark transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">
                        Sign Up
                    </span>
                </button>
                <p className="mt-5 text-xs text-gray-600 text-center ">
                    Don&apos;t have an account ? <Link to='/signup' className="border-b border-gray-500">Sign Up</Link>
                </p>
            </div>

            <Others></Others>
        </div>
    );
};

export default SignIn;