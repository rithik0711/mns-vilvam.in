import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Dashboard as DashboardIcon,
    ShoppingCart as OrdersIcon,
    Inventory as ProductsIcon,
    Group as CustomersIcon,
    PhotoLibrary as PhotosIcon,
    Logout as LogoutIcon,
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon
} from '@mui/icons-material';
import { Box, Tooltip, IconButton } from '@mui/material';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', path: '/Owner/Dashboard', icon: <DashboardIcon /> },
        { name: 'Orders', path: '/Owner/Orders', icon: <OrdersIcon /> },
        { name: 'Products', path: '/Owner/Products', icon: <ProductsIcon /> },
        { name: 'Customers', path: '/Owner/Customers', icon: <CustomersIcon /> },
        { name: 'Photos', path: '/Owner/Photos', icon: <PhotosIcon /> },
    ];

    const activeStyle = "bg-white/20 shadow-lg backdrop-blur-sm scale-105";

    return (
        <div className={`h-screen transition-all duration-300 ease-in-out flex flex-col relative ${isCollapsed ? 'w-20' : 'w-64'} bg-gradient-to-b from-[#ff8c00] to-[#e86600] text-white shadow-2xl`}>
            {/* Toggle Button */}
            <div className="absolute -right-3 top-10 z-50">
                <IconButton
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="bg-white text-[#e86600] shadow-md hover:bg-orange-50"
                    sx={{ backgroundColor: 'white', color: '#e86600', '&:hover': { backgroundColor: '#fff5eb' } }}
                    size="small"
                >
                    {isCollapsed ? <MenuIcon fontSize="small" /> : <ChevronLeftIcon fontSize="small" />}
                </IconButton>
            </div>

            {/* Logo Section */}
            <div className={`p-6 flex items-center justify-center border-b border-white/10 ${isCollapsed ? 'px-2' : ''}`}>
                <div className="flex items-center gap-3">
                    <img src="/images/mns.png" alt="Logo" className={`${isCollapsed ? 'w-10 h-6' : 'w-20 h-12'} transition-all`} />
                    {!isCollapsed && <span className="font-bold text-xl tracking-tight">VILVAM</span>}
                </div>
            </div>

            {/* Navigation items */}
            <nav className="flex-1 mt-6 px-3 space-y-2">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Tooltip key={item.name} title={isCollapsed ? item.name : ""} placement="right">
                            <Link
                                to={item.path}
                                className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 hover:bg-white/10 group ${isActive ? activeStyle : ''}`}
                            >
                                <span className={`transition-transform duration-200 group-hover:scale-110 ${isActive ? 'text-white' : 'text-orange-100'}`}>
                                    {item.icon}
                                </span>
                                {!isCollapsed && (
                                    <span className={`font-medium ${isActive ? 'text-white' : 'text-orange-50'}`}>
                                        {item.name}
                                    </span>
                                )}
                            </Link>
                        </Tooltip>
                    );
                })}
            </nav>

            {/* Bottom Profile Section */}
            <div className={`p-4 border-t border-white/10 ${isCollapsed ? 'items-center' : ''}`}>
                <div className="bg-white/10 rounded-2xl p-3 flex items-center gap-3 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white/20 overflow-hidden shrink-0">
                        <img src="https://via.placeholder.com/40" alt="Admin" />
                    </div>
                    {!isCollapsed && (
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">Admin User</p>
                            <p className="text-xs text-orange-200 truncate">Owner Account</p>
                        </div>
                    )}
                </div>

                <button className={`mt-4 w-full flex items-center gap-4 p-3 rounded-xl hover:bg-red-500/20 text-orange-100 transition-colors group`}>
                    <LogoutIcon className="group-hover:text-white transition-colors" />
                    {!isCollapsed && <span className="font-medium group-hover:text-white">Logout</span>}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
