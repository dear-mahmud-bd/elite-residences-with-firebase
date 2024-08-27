/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import Others from './Others';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet';
import useTogglePassword from '../../utility/useTogglePassword'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import usePasswordValidation from '../../utility/usePassValidation';

const SignUp = () => {
    const { createUser, userUpdateProfile } = useContext(AuthContext);

    const [passwordVisible, togglePasswordVisibility] = useTogglePassword();
    const [confirmPasswordVisible, toggleConfirmPasswordVisibility] = useTogglePassword();

    // password verification...
    const {
        password,
        errors,
        isTouched,
        handleValidatePassword,
        handlePasswordFocus,
        confirmPassword,
        confirmErrors,
        confirmIsTouched,
        handleValidateConfirmPass,
        handleConfirmFocus,
        canSubmit
    } = usePasswordValidation();

    const handleSignUpUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(name, url, email, password, confirmPassword);
        
        // create user
        // createUser(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         userUpdateProfile(name, url)
        //             .then(() => {
        //                 console.log("Account Created...")
        //             }).catch((error) => {
        //                 // An error occurred
        //                 console.log(error);
        //             });
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
    };

    return (
        <div className="my-0 sm:my-10 lg:w-1/2 xl:w-5/12 mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sign Up</title>
            </Helmet>

            <h1 className="text-3xl xl:text-4xl font-extrabold text-center mb-5">Sign Up</h1>
            <div className="mx-auto max-w-md">
                <form onSubmit={handleSignUpUser}>
                    <input name='name' required type="text" placeholder="Name"
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />

                    <input name='url' required type="url" placeholder="Enter your photo URL"
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    />

                    <input name='email' required type="email" placeholder="Email"
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    />

                    {/* Password Input */}
                    <div className="relative">
                        <input
                            name="password"
                            required
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                            className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${isTouched && errors.length ? 'border-red-500' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}

                            value={password}
                            onChange={(e) => handleValidatePassword(e.target.value)}
                            onFocus={handlePasswordFocus}
                        />
                        <span onClick={togglePasswordVisibility} className="absolute right-3 top-8 cursor-pointer text-3xl">
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div>
                        {isTouched && errors.map((error, index) => (
                            <p key={index} className="text-red-500 text-sm">{error}</p>
                        ))}
                    </div>

                    {/* Confirm Password Input */}
                    <div className="relative">
                        <input
                            name="confirmPassword"
                            required
                            type={confirmPasswordVisible ? "text" : "password"}
                            placeholder="Confirm Password"
                            className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${confirmIsTouched && confirmErrors.length ? 'border-red-500' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                            value={confirmPassword}
                            onChange={(e) => handleValidateConfirmPass(e.target.value)}
                            onFocus={handleConfirmFocus}
                        />
                        <span onClick={toggleConfirmPasswordVisibility} className="absolute right-3 top-8 cursor-pointer text-3xl">
                            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div>
                        {confirmIsTouched && confirmErrors.map((error, index) => (
                            <p key={index} className="text-red-500 text-sm">{error}</p>
                        ))}
                    </div>

                    <button disabled={!canSubmit()}
                        className={`${!canSubmit() ? 'cursor-not-allowed' : 'cursor-pointer'} mt-5 tracking-wide font-semibold bg-custom-green-light text-gray-100 w-full py-4 rounded-lg hover:bg-custom-green-dark transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}>
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
                </form>


                <p className="mt-5 text-xs text-gray-600 text-center ">
                    Already have an account ? <Link to='/signin' className="border-b border-gray-500">Sign In</Link>
                </p>
            </div>

            <Others></Others>
        </div>
    );
};

export default SignUp;