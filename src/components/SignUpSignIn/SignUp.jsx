/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet';
import useTogglePassword from '../../utility/useTogglePassword';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Others from './Others';

const SignUp = () => {
    const { createUser, userUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [passwordVisible, togglePasswordVisibility] = useTogglePassword();
    const [confirmPasswordVisible, toggleConfirmPasswordVisibility] = useTogglePassword();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const password = watch('password');

    const onSubmit = (formData) => {
        const { name, url, email, password } = formData;
        // create user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                userUpdateProfile(name, url)
                    .then(() => {
                        toast.success('Profile Updated', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }).catch(() => {
                        toast.warn('Profile Not Updated', {
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
                toast.success('Account Created Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate('/profile');
            })
            .catch(error => {
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    toast.error('Email already in use. ', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                } else {
                    toast.error('Something went wrong! Try again.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            });
    };

    return (
        <div className="my-0 sm:my-10 lg:w-1/2 xl:w-5/12 mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sign Up</title>
            </Helmet>

            <h1 className="text-3xl xl:text-4xl font-extrabold text-center mb-5">Sign Up</h1>
            <div className="mx-auto max-w-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('name', { required: true })}
                        type="text" placeholder="Name" className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                    {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}

                    <input
                        {...register('url', { required: true })}
                        type="url" placeholder="Enter your photo URL" className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    />
                    {errors.url && <p className="text-red-500 text-sm">Photo URL is required.</p>}

                    <input
                        {...register('email', { 
                            required: true, 
                            pattern: /^\S+@\S+$/i 
                        })} type="email" placeholder="Email" className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    />
                    {errors.email && <p className="text-red-500 text-sm">Valid email is required.</p>}

                    {/* Password */}
                    <div className="relative">
                        <input
                            {...register('password', {
                                required: true,
                                minLength: {
                                    value: 6, message: 'Password must be at least 6 characters',
                                },
                                validate: {
                                    hasUpperCase: (value) => /[A-Z]/.test(value) || 'Password must have an uppercase letter',
                                    hasLowerCase: (value) => /[a-z]/.test(value) || 'Password must have a lowercase letter',
                                },
                            })} type={passwordVisible ? "text" : "password"} placeholder="Password" className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        />
                        <span onClick={togglePasswordVisibility} className="absolute right-3 top-8 cursor-pointer text-3xl">
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                    {/* Confirm Password */}
                    <div className="relative">
                        <input
                            {...register('confirmPassword', {
                                required: true,
                                validate: (value) => value === password || 'Passwords do not match',
                            })} type={confirmPasswordVisible ? "text" : "password"} placeholder="Confirm Password" className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" />
                        <span onClick={toggleConfirmPasswordVisibility} className="absolute right-3 top-8 cursor-pointer text-3xl">
                            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

                    <button className="mt-5 tracking-wide font-semibold bg-custom-green-light text-gray-100 w-full py-4 rounded-lg hover:bg-custom-green-dark transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" >
                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/> <circle cx="8.5" cy="7" r="4"/> <path d="M20 8v6M23 11h-6"/>
                        </svg>
                        <span className="ml-3"> Sign Up </span>
                    </button>
                </form>

                <p className="mt-5 text-xs text-gray-600 text-center">
                    Already have an account? <Link to='/signin' className="border-b border-gray-500">Sign In</Link>
                </p>
            </div>

            <Others />
        </div>
    );
};

export default SignUp;
