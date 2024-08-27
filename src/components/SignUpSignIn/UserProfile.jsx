/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../providers/AuthProvider';

const UserProfile = () => {
    const { user, userUpdateProfile } = useContext(AuthContext);


    const [newName, setNewName] = useState(user?.displayName || '');
    const [photoUrl, setPhotoUrl] = useState(user?.photoURL || '');
    useEffect(() => {
        setNewName(user?.displayName || '');
        setPhotoUrl(user?.photoURL || '');
    }, [user]);


    const handleUpdateProfile = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const newName = form.get('newName');
        const photoUrl = form.get('photoUrl');

        userUpdateProfile(newName, photoUrl)
            .then(() => {
                console.log("Updated...")
            }).catch((error) => {
                // An error occurred
                console.log(error);
            });
    };

    return (
        <div>
            <Helmet>
                <title>My Profile</title>
            </Helmet>

            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Left Side: User Info */}
                    <div className="md:w-1/2 p-6 flex justify-center items-center bg-gray-100">
                        <div className='flex flex-col items-center'>
                            <img src={user?.photoURL} alt="User Profile" className="w-32 h-32 rounded-full shadow-md" />
                            <h2 className="text-2xl font-semibold mt-4">{user?.displayName}</h2>
                            <p className="text-gray-600">{user?.email}</p>
                        </div>
                    </div>

                    {/* Right Side: Update Profile Form */}
                    <div className="md:w-1/2 p-6">
                        <h3 className="text-xl font-semibold mb-4">Update Profile</h3>
                        <form onSubmit={handleUpdateProfile} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">New Name</label>
                                <input value={newName} onChange={(e) => setNewName(e.target.value)} required name='newName' type="text" className="input input-bordered w-full" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">New Photo URL</label>
                                <input value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} required name='photoUrl' type="url" className="input input-bordered w-full" placeholder="Enter your photo URL" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" placeholder={user?.email} disabled className="input input-bordered w-full"/>
                            </div>
                            <button className="btn bg-custom-green-light hover:bg-custom-green-dark text-white w-full mt-4">Update Profile</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;