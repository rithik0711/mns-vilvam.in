import React from 'react';
import {
    Phone as PhoneIcon,
    Email as EmailIcon,
    LocationOn as LocationIcon,
    AccessTime as TimeIcon,
    Send as SendIcon,
    Instagram as InstagramIcon,
    WhatsApp as WhatsAppIcon,
    Facebook as FacebookIcon
} from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';

const ContactUs = () => {
    return (
        <div className="p-6 max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-black text-gray-800 tracking-tighter">Get in Touch</h2>
                <p className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm">We'd love to hear from you</p>
                <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left: Contact Info Cards */}
                <div className="space-y-6">
                    <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-orange-50 space-y-8 relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl group-hover:bg-orange-100 transition-colors duration-500"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-black text-gray-800 mb-2">Owner Details</h3>
                            <p className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-8">Direct Support & Inquiries</p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover/item:bg-orange-500 group-hover/item:text-white transition-all duration-300 shadow-inner">
                                        <PhoneIcon />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Call Us</p>
                                        <p className="text-xl font-bold text-gray-800">+91 98XXX XXX01</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover/item:bg-orange-500 group-hover/item:text-white transition-all duration-300 shadow-inner">
                                        <EmailIcon />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</p>
                                        <p className="text-xl font-bold text-gray-800">rithikeswaran@example.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover/item:bg-orange-500 group-hover/item:text-white transition-all duration-300 shadow-inner">
                                        <LocationIcon />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Office Location</p>
                                        <p className="text-xl font-bold text-gray-800">Vilvam Estate, Tamil Nadu</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover/item:bg-orange-500 group-hover/item:text-white transition-all duration-300 shadow-inner">
                                        <TimeIcon />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Business Hours</p>
                                        <p className="text-xl font-bold text-gray-800">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Connect Card */}
                    <div className="bg-[#1a1a1a] p-10 rounded-[3rem] shadow-xl text-white flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h4 className="text-2xl font-black uppercase tracking-tighter">Follow Our Journey</h4>
                            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mt-1">@mns_vilvam_official</p>
                        </div>
                        <div className="flex gap-4">
                            <IconButton className="bg-white/10 hover:bg-orange-500 text-white transition-all p-3">
                                <InstagramIcon fontSize="medium" />
                            </IconButton>
                            <IconButton className="bg-white/10 hover:bg-green-500 text-white transition-all p-3">
                                <WhatsAppIcon fontSize="medium" />
                            </IconButton>
                            <IconButton className="bg-white/10 hover:bg-blue-600 text-white transition-all p-3">
                                <FacebookIcon fontSize="medium" />
                            </IconButton>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-sm border border-orange-50 flex flex-col h-full relative group">
                    <div className="absolute inset-0 bg-orange-50/50 rounded-[3.5rem] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-700 -z-10"></div>

                    <h3 className="text-3xl font-black text-gray-800 mb-8 tracking-tighter">Send a Message</h3>

                    <form className="space-y-8 flex-1 flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Rithik"
                                    className="w-full bg-gray-50/50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold text-gray-700"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="example@mail.com"
                                    className="w-full bg-gray-50/50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold text-gray-700"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Subject</label>
                            <select className="w-full bg-gray-50/50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold text-gray-700 appearance-none">
                                <option>Product Inquiry</option>
                                <option>Business Collaboration</option>
                                <option>Wholesale Order</option>
                                <option>Support Request</option>
                            </select>
                        </div>

                        <div className="space-y-2 flex-1 flex flex-col">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Your Message</label>
                            <textarea
                                rows="6"
                                placeholder="How can we help you today?"
                                className="w-full bg-gray-50/50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-3xl px-6 py-5 outline-none transition-all font-medium text-gray-700 flex-1 resize-none shadow-inner"
                            />
                        </div>

                        <button
                            type="button"
                            className="w-full bg-gradient-to-tr from-orange-500 to-orange-600 text-white font-black py-5 rounded-[2rem] shadow-2xl shadow-orange-100 hover:shadow-orange-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                        >
                            <SendIcon fontSize="small" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-[4rem] bg-orange-50 border-4 border-dashed border-orange-100 flex items-center justify-center group overflow-hidden relative">
                <LocationIcon className="text-orange-200 group-hover:scale-150 group-hover:rotate-12 transition-transform duration-700" sx={{ fontSize: 100 }} />
                <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="bg-white px-8 py-3 rounded-full font-black text-orange-600 shadow-xl scale-0 group-hover:scale-100 transition-transform delay-100">View Office on Google Maps</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
