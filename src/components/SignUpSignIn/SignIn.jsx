/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Others from './Others';
import { BiLogIn } from 'react-icons/bi';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet';
import useTogglePassword from '../../utility/useTogglePassword';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const SignIn = () => {
    const { userSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const [passwordVisible, togglePasswordVisibility] = useTogglePassword();

    // Initialize useForm
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (formData) => {
        const { email, password } = formData;
        userSignIn(email, password)
            .then(() => {
                toast.success('Sign In Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate(location?.state ? location.state : '/profile');
            })
            .catch(() => {
                toast.error('Invalid Email or Password', {
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

    return (
        <div className="my-0 sm:my-10 lg:w-1/2 xl:w-5/12 mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sign In</title>
            </Helmet>
            <h1 className="text-3xl xl:text-4xl font-extrabold text-center mb-5">Sign In</h1>

            <div className="mx-auto max-w-md">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('email', {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i, message: "Invalid email address"
                            }
                        })} type="email" placeholder="Email" className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                    <div className="relative">
                        <input
                            {...register('password', {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters long" }
                            })} type={passwordVisible ? "text" : "password"} placeholder="Password" className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" />
                        <span onClick={togglePasswordVisibility} className="absolute right-3 top-8 cursor-pointer text-3xl">
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                    <button type='submit' className="mt-5 tracking-wide font-semibold bg-custom-green-light text-gray-100 w-full py-4 rounded-lg hover:bg-custom-green-dark transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <BiLogIn className='text-2xl' />
                        <span className="ml-3"> Sign In </span>
                    </button>
                </form>

                <p className="mt-5 text-xs text-gray-600 text-center ">
                    Don&apos;t have an account? <Link to='/signup' className="border-b border-gray-500">Sign Up</Link>
                </p>
            </div>

            <Others />
        </div>
    );
};

export default SignIn;
