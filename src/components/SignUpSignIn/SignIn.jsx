/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Others from './Others';
import { BiLogIn } from 'react-icons/bi';

const SignIn = () => {
    const handleSignInUser = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);
    }
    return (
        <div className="my-0 sm:my-10 lg:w-1/2 xl:w-5/12 mx-auto">
            <h1 className="text-3xl xl:text-4xl font-extrabold text-center mb-5">Sign In</h1>

            <div className="mx-auto max-w-md">

                <form onSubmit={handleSignInUser}>
                    <input name='email' type="email" placeholder="Email" required
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />

                    <input name='password' type="password" placeholder="Password" required
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    />

                    <button type='submit'
                        className="mt-5 tracking-wide font-semibold bg-custom-green-light text-gray-100 w-full py-4 rounded-lg hover:bg-custom-green-dark transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <BiLogIn className='text-2xl'></BiLogIn>
                        <span className="ml-3">
                            Sign In
                        </span>
                    </button>
                </form>
                <p className="mt-5 text-xs text-gray-600 text-center ">
                    Don&apos;t have an account ? <Link to='/signup' className="border-b border-gray-500">Sign Up</Link>
                </p>
            </div>

            <Others></Others>
        </div>
    );
};

export default SignIn;