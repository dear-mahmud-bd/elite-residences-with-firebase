/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';

const UserProfile = () => {
    const { user, loading, setUser, userUpdateProfile } = useContext(AuthContext);

    const { register, handleSubmit, setValue } = useForm();
    useEffect(() => {
        // Set default values when the user changes
        setValue('newName', user?.displayName || '');
        setValue('photoUrl', user?.photoURL || '');
    }, [user, setValue]);

    const handleUpdateProfile = (formData) => {
        const { newName, photoUrl } = formData;

        userUpdateProfile(newName, photoUrl)
            .then(() => {
                setUser(prevUser => ({
                    ...prevUser,
                    displayName: newName,
                    photoURL: photoUrl,
                }));
                toast.success('Account Updated Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }).catch((error) => {
                toast.error('Something Went Wrong! Try Again', {
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
        <div>
            <Helmet>
                <title>My Profile</title>
            </Helmet>

            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__fadeInDown">
                    <div className="md:w-1/2 p-6 flex justify-center items-center bg-gray-100">
                        <div className='flex flex-col items-center'>
                            <img src={user?.photoURL} alt="User Profile" className="w-32 h-32 rounded-full shadow-md" />
                            <h2 className="text-2xl font-semibold mt-4">{user?.displayName}</h2>
                            <p className="text-gray-600">{user?.email}</p>
                        </div>
                    </div>

                    {/* Update Profile Form */}
                    <div className="md:w-1/2 p-6">
                        <h3 className="text-xl font-semibold mb-4">Update Profile</h3>

                        <form onSubmit={handleSubmit(handleUpdateProfile)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">New Name</label>
                                <input {...register('newName', { required: true })}
                                    type="text" className="input input-bordered w-full" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">New Photo URL</label>
                                <input {...register('photoUrl', { required: true })}
                                    type="url" className="input input-bordered w-full" placeholder="Enter your photo URL" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" placeholder={user?.email} disabled className="input input-bordered w-full" />
                            </div>
                            <button type="submit" className="btn bg-custom-green-light hover:bg-custom-green-dark text-white w-full mt-4" disabled={loading}>
                                {loading ? 'Updating...' : 'Update Profile'}
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
