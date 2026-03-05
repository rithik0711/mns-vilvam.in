import React, { useState } from 'react';
import {
    Person as PersonIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationIcon,
    Edit as EditIcon,
    Save as SaveIcon,
    VerifiedUser as VerifiedIcon,
    Stars as LoyaltyIcon,
    ShoppingBag as OrdersCountIcon,
    Shield as SecurityIcon
} from '@mui/icons-material';
import { IconButton, Tooltip, TextField, Avatar } from '@mui/material';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: 'Rithikeswaran',
        email: 'rithikeswaran@example.com',
        phone: '+91 98XXX XXX01',
        location: 'Tamil Nadu, India',
        memberSince: 'January 2024',
        loyaltyPoints: 1250,
        totalOrders: 15
    });

    const handleSave = () => {
        setIsEditing(false);
        // Logic to save data to backend would go here
    };

    return (
        <div className="p-6 max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header / Banner Section */}
            <div className="relative group">
                <div className="h-48 md:h-64 rounded-[3rem] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow-xl overflow-hidden relative">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)]"></div>
                    <div className="absolute top-8 right-8 flex gap-3">
                        <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/30 flex items-center gap-2 text-white font-bold shadow-lg">
                            <LoyaltyIcon fontSize="small" />
                            {userData.loyaltyPoints} Points
                        </div>
                    </div>
                </div>

                {/* Profile Avatar & Title */}
                <div className="flex flex-col md:flex-row items-center md:items-end gap-6 px-10 -mt-20 relative z-10">
                    <div className="relative group/avatar">
                        <Avatar
                            sx={{ width: 160, height: 160, border: '8px solid white', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                            className="bg-orange-100 text-orange-600 font-black text-5xl"
                        >
                            {userData.name.charAt(0)}
                        </Avatar>
                        <div className="absolute bottom-2 right-2 bg-green-500 border-4 border-white w-6 h-6 rounded-full shadow-lg"></div>
                    </div>
                    <div className="flex-1 text-center md:text-left pb-4">
                        <h2 className="text-4xl font-black text-gray-800 tracking-tighter flex items-center justify-center md:justify-start gap-2">
                            {userData.name}
                            <VerifiedIcon className="text-blue-500" fontSize="medium" />
                        </h2>
                        <p className="text-orange-600 font-black uppercase tracking-widest text-sm mt-1">Premium Member • Since {userData.memberSince}</p>
                    </div>
                    <div className="pb-4">
                        {!isEditing ? (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-white hover:bg-orange-50 text-orange-600 font-black py-3 px-8 rounded-2xl shadow-lg border-2 border-orange-100 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                            >
                                <EditIcon fontSize="small" />
                                EDIT PROFILE
                            </button>
                        ) : (
                            <button
                                onClick={handleSave}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-black py-3 px-8 rounded-2xl shadow-lg shadow-orange-100 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                            >
                                <SaveIcon fontSize="small" />
                                SAVE CHANGES
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
                {/* Left Column: Stats & Security */}
                <div className="space-y-8">
                    {/* Stats Card */}
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-orange-50 space-y-6">
                        <h3 className="text-lg font-black text-gray-800 uppercase tracking-widest border-b border-orange-50 pb-4 flex items-center gap-2">
                            <LoyaltyIcon className="text-orange-500" /> Account Stats
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-orange-50 rounded-[2rem] p-6 text-center group hover:bg-orange-100 transition-colors">
                                <p className="text-3xl font-black text-orange-600">{userData.totalOrders}</p>
                                <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mt-1">Total Orders</p>
                            </div>
                            <div className="bg-blue-50 rounded-[2rem] p-6 text-center group hover:bg-blue-100 transition-colors">
                                <p className="text-3xl font-black text-blue-600">8</p>
                                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mt-1">Wishlist</p>
                            </div>
                        </div>
                    </div>

                    {/* Security Card */}
                    <div className="bg-[#1a1a1a] rounded-[2.5rem] p-8 shadow-xl text-white space-y-6">
                        <h3 className="text-lg font-black uppercase tracking-widest border-b border-white/10 pb-4 flex items-center gap-2">
                            <SecurityIcon className="text-orange-500" /> Security
                        </h3>
                        <div className="space-y-4">
                            <button className="w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-sm font-bold transition-all flex items-center justify-between px-6 group">
                                Change Password
                                <Shield className="text-white/20 group-hover:text-orange-500 transition-colors" />
                            </button>
                            <button className="w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-sm font-bold transition-all flex items-center justify-between px-6 group">
                                2-Factor Auth
                                <span className="text-[10px] bg-green-500 text-white px-2 py-1 rounded-md">ENABLED</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: Information & Settings */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-orange-50">
                        <h3 className="text-2xl font-black text-gray-800 mb-8 flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-orange-50 text-orange-500">
                                <PersonIcon />
                            </div>
                            Personal Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                { label: 'Full Name', value: userData.name, icon: <PersonIcon />, key: 'name' },
                                { label: 'Email Address', value: userData.email, icon: <EmailIcon />, key: 'email' },
                                { label: 'Phone Number', value: userData.phone, icon: <PhoneIcon />, key: 'phone' },
                                { label: 'Current Location', value: userData.location, icon: <LocationIcon />, key: 'location' },
                            ].map((field) => (
                                <div key={field.key} className="space-y-3">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                        {field.icon} {field.label}
                                    </label>
                                    {!isEditing ? (
                                        <div className="px-6 py-5 rounded-3xl bg-gray-50/50 border-2 border-transparent font-bold text-gray-700 text-lg">
                                            {field.value}
                                        </div>
                                    ) : (
                                        <input
                                            type="text"
                                            value={field.value}
                                            onChange={(e) => setUserData({ ...userData, [field.key]: e.target.value })}
                                            className="w-full px-6 py-5 rounded-3xl bg-white border-2 border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-bold text-gray-800 text-lg shadow-inner"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Preferences / Settings Section */}
                    <div className="bg-gradient-to-br from-[#fdfbf7] to-[#fffcf5] border border-orange-100 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="text-xl font-black text-gray-800 uppercase tracking-tight">Notification Preferences</h4>
                            <p className="text-sm text-gray-500 font-medium">Control how we communicate with you</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-white shadow-sm border border-orange-100 px-6 py-3 rounded-2xl text-sm font-bold text-orange-600 hover:bg-orange-50 transition-all">Sms Alerts</button>
                            <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all">Email Weekly</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Internal Shield Component for icon consistency
const Shield = ({ className }) => (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
    </svg>
);

export default Profile;