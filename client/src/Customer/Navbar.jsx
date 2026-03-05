import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    Notifications as NotificationsIcon,
    Search as SearchIcon,
    AccountCircle as UserIcon
} from '@mui/icons-material';
import { IconButton, Badge, InputBase, Paper } from '@mui/material';

const Navbar = () => {
    const location = useLocation();

    // Derived title based on path
    const getPageTitle = (path) => {
        const segments = path.split('/').filter(Boolean);
        if (segments.length <= 1) return 'Dashboard';
        return segments[segments.length - 1].charAt(0).toUpperCase() + segments[segments.length - 1].slice(1);
    };

    return (
        <div className="h-20 bg-white/80 backdrop-blur-md border-b border-orange-100 flex items-center justify-between px-8 sticky top-0 z-40">
            {/* Left Section: Page Title & Breadcrumb-style info */}
            <div>
                <h1 className="text-xl font-bold text-gray-800 tracking-tight">
                    {getPageTitle(location.pathname)}
                </h1>
                <p className="text-xs text-orange-500 font-medium uppercase tracking-widest">
                    MNS Vilvam / Customer
                </p>
            </div>

            {/* Middle Section: Search Bar */}
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    width: 400,
                    boxShadow: 'none',
                    bgcolor: '#fff7ed',
                    borderRadius: '12px',
                    border: '1px solid #ffedd5'
                }}
            >
                <IconButton sx={{ p: '10px', color: '#f97316' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1, fontSize: '0.9rem' }}
                    placeholder="Search products..."
                    inputProps={{ 'aria-label': 'search products' }}
                />
            </Paper>

            {/* Right Section: Actions */}
            <div className="flex items-center gap-2">
                <IconButton className="text-gray-400 hover:text-orange-500 transition-colors">
                    <Badge badgeContent={4} color="warning" overlap="circular">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <div className="h-8 w-[1px] bg-orange-100 mx-2"></div>

                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-gray-800 leading-none">Rithikeswaran</p>
                        <p className="text-[10px] text-orange-500 font-bold">PREMIUM MEMBER</p>
                    </div>
                    <IconButton className="bg-orange-50 border border-orange-100" sx={{ p: 0.5 }}>
                        <UserIcon className="text-orange-500" fontSize="large" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
