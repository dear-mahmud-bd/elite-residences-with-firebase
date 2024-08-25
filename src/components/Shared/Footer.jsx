/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='container max-w-7xl mx-auto'>
            <footer className="footer text-base-content p-5 pt-10">
                <nav className='text-gray-100'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Details</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='text-gray-100'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='text-gray-100'>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a><FaLinkedin /></a>
                        <a><FaGithub /></a>
                        <a><FaYoutube /></a>
                        <a><FaFacebookF /> </a>
                    </div>
                    <p className="mt-1">Get the latest updates right in your inbox</p>
                    <div className="join text-black w">
                        <input type="email" placeholder="Enter your email" className="input input-bordered join-item" />
                        <button type="submit" className="btn join-item p-3 bg-custom-green-dark rounded-r-md hover:bg-custom-green-dark text-white">
                            Subscribe
                        </button>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center text-gray-300 border-base-300 border-t px-10 py-4">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by EliteResidences Ltd</p>
            </footer>
        </div>
    );
};

export default Footer;