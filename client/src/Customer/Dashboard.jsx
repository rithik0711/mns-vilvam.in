import React from 'react';
import {
    LocalOffer as PriceIcon,
    ShoppingCart as CartIcon,
    Star as StarIcon,
    FavoriteBorder as WishlistIcon,
    ArrowForward as ArrowIcon
} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const Dashboard = () => {
    const recommendedProducts = [
        { id: 1, name: 'Pure Vilvam Oil', price: '450.00', category: 'ESENTIAL OIL', rating: 4.8 },
        { id: 2, name: 'Natural Sandalwood', price: '250.00', category: 'NATURAL SOAP', rating: 4.9 },
        { id: 3, name: 'Herbal Hair Care', price: '550.00', category: 'HAIR OIL', rating: 4.7 },
        { id: 4, name: 'Organic Body Wash', price: '350.00', category: 'BODY OIL', rating: 4.6 },
    ];

    const allProducts = [
        ...recommendedProducts,
        { id: 5, name: 'Coconut Vitality', price: '180.00', category: 'BASE OIL', rating: 4.5 },
        { id: 6, name: 'Saffron Glow', price: '950.00', category: 'FACE OIL', rating: 5.0 },
        { id: 7, name: 'Traditional Root Oil', price: '650.00', category: 'SPECIAL BLEND', rating: 4.8 },
        { id: 8, name: 'Cold Pressed Sesame', price: '220.00', category: 'EDIBLE OIL', rating: 4.4 },
    ];

    return (
        <div className="p-6 md:p-10 space-y-16 animate-in fade-in duration-1000">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#ff8c00] to-[#e86600] rounded-[3.5rem] p-10 md:p-16 text-white shadow-2xl shadow-orange-100 group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
                <div className="relative z-10 max-w-2xl space-y-6">
                    <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">Special Offer for You</span>
                    <h3 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter">Organic & Pure Wellness</h3>
                    <p className="text-orange-50 font-medium text-lg md:text-xl opacity-90 leading-relaxed">Experience nature's magic with our 100% natural oil collection, crafted for your holistic well-being.</p>
                    <div className="flex gap-4 pt-4">
                        <button className="bg-white text-orange-600 px-10 py-4 rounded-[2rem] font-black shadow-xl hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest">Shop Now</button>
                        <button className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-[2rem] font-black hover:bg-white/10 transition-all text-xs uppercase tracking-widest leading-none">Learn More</button>
                    </div>
                </div>
            </div>

            {/* Recommended Section */}
            <div className="space-y-8">
                <div className="flex justify-between items-end">
                    <div>
                        <h3 className="text-3xl font-black text-gray-800 tracking-tighter">Recommended for You</h3>
                        <p className="text-orange-500 font-black uppercase tracking-widest text-[10px] mt-1">Curated based on your health journey</p>
                    </div>
                    <button className="flex items-center gap-2 text-gray-400 font-bold hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px] group">
                        View All <ArrowIcon fontSize="small" className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {recommendedProducts.map((p) => (
                        <div key={p.id} className="group bg-white p-5 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-orange-50 relative overflow-hidden">
                            <div className="h-48 bg-[#fffbf2] rounded-[2rem] mb-4 flex items-center justify-center relative shadow-inner group-hover:scale-95 transition-transform duration-500 overflow-hidden">
                                <div className="absolute top-4 right-4 z-10">
                                    <IconButton className="bg-white/80 backdrop-blur-sm text-gray-400 hover:text-red-500 shadow-sm">
                                        <WishlistIcon fontSize="small" />
                                    </IconButton>
                                </div>
                                <div className="w-16 h-16 bg-orange-100 rounded-full blur-2xl absolute group-hover:scale-150 transition-transform"></div>
                                <CartIcon className="text-orange-200 relative z-10" sx={{ fontSize: 60 }} />
                            </div>
                            <div className="px-2 space-y-2">
                                <span className="text-[10px] font-black text-orange-400 tracking-widest">{p.category}</span>
                                <h4 className="font-black text-gray-800 text-lg leading-tight line-clamp-1">{p.name}</h4>
                                <div className="flex justify-between items-center pt-2">
                                    <p className="text-xl font-black text-orange-600 tracking-tighter">₹{p.price}</p>
                                    <div className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
                                        <StarIcon className="text-yellow-400" sx={{ fontSize: 14 }} />
                                        <span className="text-xs font-black text-gray-600">{p.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Discover All Products Section */}
            <div className="space-y-10 pt-10">
                <div className="text-center md:text-left space-y-2">
                    <h3 className="text-4xl font-black text-gray-800 tracking-tighter uppercase">Discover All Products</h3>
                    <p className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Your gateway to 100% natural living</p>
                    <div className="w-20 h-1.5 bg-orange-500 rounded-full md:ml-2"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {allProducts.map((p) => (
                        <div key={p.id} className="group flex flex-col bg-white border border-gray-100 rounded-[3rem] p-4 hover:shadow-2xl hover:border-orange-100 transition-all duration-500">
                            <div className="h-44 bg-gray-50/50 rounded-[2.5rem] mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-orange-50/30 transition-colors">
                                <PriceIcon className="text-gray-200 group-hover:text-orange-100 transition-colors" sx={{ fontSize: 70 }} />
                                <div className="absolute inset-0 flex items-center justify-center bg-orange-600/0 group-hover:bg-orange-600/10 backdrop-blur-0 group-hover:backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <button className="bg-white text-orange-600 font-black px-6 py-2.5 rounded-xl text-xs shadow-xl scale-90 group-hover:scale-100 transition-all">Add to Cart</button>
                                </div>
                            </div>
                            <div className="flex-1 px-3 space-y-3">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-extrabold text-gray-800 text-base leading-tight w-2/3">{p.name}</h4>
                                    <p className="text-sm font-black text-orange-600">₹{p.price}</p>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-black tracking-widest text-gray-400 uppercase">
                                    <span>{p.category}</span>
                                    <div className="flex items-center gap-1">
                                        <StarIcon sx={{ fontSize: 10 }} className="text-orange-400" /> {p.rating}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="bg-[#1a1a1a] rounded-[4rem] p-12 overflow-hidden relative flex flex-col md:flex-row items-center justify-between gap-8 mt-16 scale-95 hover:scale-100 transition-all duration-700">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="relative z-10 text-center md:text-left space-y-4">
                        <h4 className="text-4xl font-black text-white tracking-tighter">Looking for something specific?</h4>
                        <p className="text-white/50 font-bold uppercase tracking-widest text-xs">Our experts are here to help you find the perfect oil blend</p>
                    </div>
                    <button className="relative z-10 bg-orange-500 text-white font-black px-12 py-5 rounded-[2rem] shadow-2xl shadow-orange-500/20 hover:bg-orange-600 hover:-translate-y-1 transition-all uppercase tracking-[0.2em] text-xs">Consult Now</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
