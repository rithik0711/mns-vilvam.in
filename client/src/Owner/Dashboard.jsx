import React from 'react';
import {
    TrendingUp as RevenueIcon,
    ShoppingCart as OrdersIcon,
    People as CustomersIcon,
    Inventory as ProductsIcon,
    Add as AddIcon,
    Assessment as ReportIcon,
    Settings as SettingsIcon,
    LocalOffer as SaleIcon,
    ArrowUpward as UpIcon,
    ArrowDownward as DownIcon,
    Circle as StatusIcon,
    MoreVert as MoreIcon
} from '@mui/icons-material';
import { IconButton, Tooltip, LinearProgress } from '@mui/material';

const Dashboard = () => {
    const stats = [
        { label: 'Total Revenue', value: '₹ 1,24,500', trend: '+12.5%', isUp: true, icon: <RevenueIcon />, color: 'orange' },
        { label: 'Total Orders', value: '1,854', trend: '+8.2%', isUp: true, icon: <OrdersIcon />, color: 'blue' },
        { label: 'Total Customers', value: '452', trend: '-2.4%', isUp: false, icon: <CustomersIcon />, color: 'green' },
        { label: 'Avg Order Value', value: '₹ 850', trend: '+5.1%', isUp: true, icon: <SaleIcon />, color: 'purple' },
    ];

    const recentActivities = [
        { id: 1, user: 'Rithikeswaran', action: 'placed a new order', time: '5 mins ago', amount: '₹ 1,450', status: 'Pending' },
        { id: 2, user: 'Arun Kumar', action: 'registered as a new customer', time: '15 mins ago', amount: null, status: 'New' },
        { id: 3, user: 'Priya Devi', action: 'purchased Pure Vilvam Oil', time: '1 hour ago', amount: '₹ 450', status: 'Completed' },
        { id: 4, user: 'Senthil Raj', action: 'updated his profile', time: '3 hours ago', amount: null, status: 'Active' },
    ];

    return (
        <div className="p-6 md:p-10 space-y-10 animate-in fade-in duration-1000">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h2 className="text-4xl font-black text-gray-800 tracking-tighter">Business Overview</h2>
                    <p className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mt-1">Real-time performance metrics</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-white border-2 border-orange-100 text-orange-600 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-all shadow-sm">
                        Export Report
                    </button>
                    <button className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-100 hover:bg-orange-600 transition-all flex items-center gap-2">
                        <AddIcon fontSize="small" /> New Entry
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-[3rem] shadow-sm border border-orange-50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-orange-50 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                        <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                            <div className="flex justify-between items-start">
                                <div className={`p-4 rounded-2xl bg-${stat.color}-50 text-${stat.color}-500 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                                    {stat.icon}
                                </div>
                                <div className={`flex items-center gap-1 ${stat.isUp ? 'text-green-500' : 'text-red-500'} font-black text-xs`}>
                                    {stat.isUp ? <UpIcon fontSize="small" /> : <DownIcon fontSize="small" />}
                                    {stat.trend}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-gray-800 tracking-tighter mb-1">{stat.value}</h3>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left: Recent Activity Feed */}
                <div className="lg:col-span-2 bg-white rounded-[3.5rem] p-10 shadow-sm border border-orange-50 space-y-8">
                    <div className="flex justify-between items-center border-b border-orange-50 pb-6">
                        <h3 className="text-2xl font-black text-gray-800 tracking-tight">Recent Activity</h3>
                        <button className="text-[10px] font-black text-orange-600 uppercase tracking-widest hover:underline">View All Feed</button>
                    </div>
                    <div className="space-y-8">
                        {recentActivities.map((activity) => (
                            <div key={activity.id} className="flex items-start justify-between group">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-orange-50 group-hover:text-orange-500 transition-all shadow-inner relative overflow-hidden">
                                        <CustomersIcon />
                                        <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-white m-2"></div>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-bold text-gray-800">
                                            {activity.user} <span className="font-medium text-gray-400">{activity.action}</span>
                                        </p>
                                        <div className="flex items-center gap-3 text-[10px] font-black text-gray-300 uppercase tracking-widest">
                                            <span>{activity.time}</span>
                                            {activity.amount && (
                                                <>
                                                    <div className="w-1 h-1 rounded-full bg-orange-200"></div>
                                                    <span className="text-orange-500">{activity.amount}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${activity.status === 'Completed' ? 'bg-green-50 text-green-600' :
                                        activity.status === 'Pending' ? 'bg-orange-50 text-orange-600' :
                                            'bg-blue-50 text-blue-600'
                                    }`}>
                                    {activity.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Quick Actions & Target Progress */}
                <div className="space-y-10">
                    <div className="bg-[#1a1a1a] rounded-[3.5rem] p-10 shadow-xl text-white space-y-8 relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-600/20 blur-3xl"></div>
                        <h3 className="text-2xl font-black tracking-tight relative z-10">Monthly Target</h3>
                        <div className="space-y-6 relative z-10">
                            <div>
                                <div className="flex justify-between text-xs font-black uppercase tracking-widest mb-3 opacity-60">
                                    <span>Sales Progress</span>
                                    <span>75%</span>
                                </div>
                                <LinearProgress
                                    variant="determinate"
                                    value={75}
                                    className="h-3 rounded-full bg-white/10"
                                    sx={{
                                        '& .MuiLinearProgress-bar': {
                                            background: 'linear-gradient(90deg, #ff8c00, #ffae42)',
                                            borderRadius: '20px'
                                        }
                                    }}
                                />
                            </div>
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-4xl font-black text-orange-500 tracking-tighter">₹ 7,50,000</p>
                                <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mt-2 text-wrap">Target: ₹ 10,00,000 Volume</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[3.5rem] p-10 shadow-sm border border-orange-50 space-y-8">
                        <h3 className="text-xl font-black text-gray-800 uppercase tracking-widest border-b border-orange-50 pb-6 flex items-center justify-between">
                            Quick Links
                            <ReportIcon className="text-orange-500" />
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Inventory', icon: <ProductsIcon />, color: 'orange' },
                                { label: 'Customers', icon: <CustomersIcon />, color: 'blue' },
                                { label: 'Orders', icon: <OrdersIcon />, color: 'green' },
                                { label: 'Settings', icon: <SettingsIcon />, color: 'purple' },
                            ].map((link, idx) => (
                                <button key={idx} className="flex flex-col items-center justify-center p-6 rounded-3xl bg-gray-50/50 hover:bg-orange-50 hover:text-orange-600 transition-all group gap-3 border border-transparent hover:border-orange-100">
                                    <div className="text-gray-300 group-hover:text-orange-500 transition-colors">
                                        {link.icon}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">{link.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
