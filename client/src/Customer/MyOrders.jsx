import React from 'react';
import {
    ReceiptLong as OrderIcon,
    LocalShipping as ShippingIcon,
    CheckCircle as DeliveredIcon,
    History as HistoryIcon,
    ArrowForwardIos as ArrowIcon,
    ShoppingBag as BagIcon,
    CalendarMonth as DateIcon,
    Inventory2 as BoxIcon
} from '@mui/icons-material';
import { IconButton, Chip, Tooltip } from '@mui/material';

const MyOrders = () => {
    const orders = [
        {
            id: '#MNS-7721',
            date: 'Feb 25, 2026',
            status: 'Shipped',
            total: '₹ 1,450.00',
            items: [
                { name: 'Pure Vilvam Oil (100ml)', qty: 2, price: '₹ 900.00' },
                { name: 'Natural Sandalwood Soap', qty: 1, price: '₹ 550.00' }
            ]
        },
        {
            id: '#MNS-7688',
            date: 'Jan 12, 2026',
            status: 'Delivered',
            total: '₹ 550.00',
            items: [
                { name: 'Organic Hair Growth Oil', qty: 1, price: '₹ 550.00' }
            ]
        },
        {
            id: '#MNS-7602',
            date: 'Dec 15, 2025',
            status: 'Delivered',
            total: '₹ 2,100.00',
            items: [
                { name: 'Body Vitality Pack', qty: 1, price: '₹ 2,100.00' }
            ]
        }
    ];

    const getStatusChip = (status) => {
        switch (status) {
            case 'Shipped': return <Chip icon={<ShippingIcon sx={{ fontSize: 14 }} />} label="Shipped" size="small" className="bg-blue-50 text-blue-600 font-bold border-blue-100" />;
            case 'Delivered': return <Chip icon={<DeliveredIcon sx={{ fontSize: 14 }} />} label="Delivered" size="small" className="bg-green-50 text-green-600 font-bold border-green-100" />;
            case 'Processing': return <Chip icon={<HistoryIcon sx={{ fontSize: 14 }} />} label="Processing" size="small" className="bg-orange-50 text-orange-600 font-bold border-orange-100" />;
            default: return null;
        }
    };

    return (
        <div className="p-6 max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-4xl font-extrabold text-gray-800 tracking-tighter">My Order History</h2>
                    <p className="text-orange-500 font-black uppercase tracking-widest text-xs mt-1">Track your wellness journey</p>
                </div>
                <div className="flex bg-orange-50 p-2 rounded-2xl gap-2 border border-orange-100">
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-xl text-xs font-black shadow-lg shadow-orange-100 transition-all hover:bg-orange-600 uppercase tracking-widest">Ongoing</button>
                    <button className="text-orange-600 px-6 py-2 rounded-xl text-xs font-black hover:bg-white transition-all uppercase tracking-widest">Completed</button>
                </div>
            </div>

            {/* Orders List */}
            <div className="space-y-8">
                {orders.map((order) => (
                    <div key={order.id} className="group bg-white rounded-[2.5rem] border border-orange-50 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-500 overflow-hidden relative">
                        {/* Order Ribbon */}
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="p-8 md:p-10">
                            {/* Order Summary Header */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-orange-50 pb-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-orange-50 flex items-center justify-center text-orange-500 shadow-inner group-hover:rotate-6 transition-transform">
                                        <BoxIcon fontSize="large" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-2xl font-black text-gray-800 tracking-tighter">{order.id}</p>
                                        <div className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                            <div className="flex items-center gap-1"><DateIcon sx={{ fontSize: 14 }} /> {order.date}</div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-200"></div>
                                            <div className="flex items-center gap-1"><BagIcon sx={{ fontSize: 14 }} /> {order.items.length} {order.items.length > 1 ? 'Items' : 'Item'}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-3">
                                    {getStatusChip(order.status)}
                                    <p className="text-2xl font-black text-orange-600 tracking-tighter">{order.total}</p>
                                </div>
                            </div>

                            {/* Items Preview */}
                            <div className="space-y-4">
                                {order.items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-2 group/item">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-orange-400 group-hover/item:scale-150 transition-transform"></div>
                                            <div>
                                                <p className="font-bold text-gray-700">{item.name}</p>
                                                <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">Quantity: {item.qty}</p>
                                            </div>
                                        </div>
                                        <p className="font-black text-gray-800 text-sm tracking-wide">{item.price}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Footer Actions */}
                            <div className="mt-8 pt-8 border-t border-orange-50 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((n) => (
                                        <div key={n} className="w-10 h-10 rounded-full bg-orange-100 border-4 border-white flex items-center justify-center text-[10px] font-black text-orange-600 shadow-sm relative z-[n]">
                                            Img
                                        </div>
                                    ))}
                                    <div className="pl-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Total Value Added</div>
                                </div>
                                <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black py-4 px-10 rounded-2xl shadow-lg shadow-orange-100 hover:shadow-orange-200 transition-all flex items-center justify-center gap-3 group/btn uppercase tracking-widest text-xs">
                                    Order Details
                                    <ArrowIcon className="text-white group-hover/btn:translate-x-1 transition-transform" sx={{ fontSize: 14 }} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State Illustration Placeholder */}
            {orders.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                    <div className="w-32 h-32 rounded-full bg-orange-50 flex items-center justify-center mb-4">
                        <OrderIcon sx={{ fontSize: 60, color: '#fed7aa' }} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tighter">No orders found</h3>
                    <p className="text-gray-400 font-bold">Your wellness basket is waiting for its first item!</p>
                    <button className="mt-4 bg-orange-500 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-orange-100 hover:scale-105 transition-all text-xs uppercase tracking-widest">Start Shopping</button>
                </div>
            )}
        </div>
    );
};

export default MyOrders;
