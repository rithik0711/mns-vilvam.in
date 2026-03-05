import React from 'react';
import {
    LocalShipping as ShippingIcon,
    Pending as PendingIcon,
    CheckCircle as CompletedIcon,
    Cancel as CancelledIcon,
    MoreVert as MoreIcon,
    FilterList as FilterIcon,
    Download as DownloadIcon
} from '@mui/icons-material';
import { IconButton, Chip, Tooltip } from '@mui/material';

const Orders = () => {
    const orders = [
        { id: '#ORD-9981', customer: 'Rithik Eswaran', date: 'Feb 27, 2026', items: 3, status: 'Shipped', amount: '₹ 2,450.00' },
        { id: '#ORD-9982', customer: 'Anitha Raj', date: 'Feb 26, 2026', items: 1, status: 'Pending', amount: '₹ 850.00' },
        { id: '#ORD-9983', customer: 'Senthil Kumar', date: 'Feb 26, 2026', items: 2, status: 'Completed', amount: '₹ 1,200.00' },
        { id: '#ORD-9984', customer: 'Vijay Shankar', date: 'Feb 25, 2026', items: 4, status: 'Cancelled', amount: '₹ 3,100.00' },
    ];

    const getStatusChip = (status) => {
        switch (status) {
            case 'Shipped': return <Chip icon={<ShippingIcon sx={{ fontSize: '16px !important' }} />} label="Shipped" size="small" className="bg-blue-50 text-blue-600 font-bold border-blue-100" />;
            case 'Pending': return <Chip icon={<PendingIcon sx={{ fontSize: '16px !important' }} />} label="Pending" size="small" className="bg-orange-50 text-orange-600 font-bold border-orange-100" />;
            case 'Completed': return <Chip icon={<CompletedIcon sx={{ fontSize: '16px !important' }} />} label="Completed" size="small" className="bg-green-50 text-green-600 font-bold border-green-100" />;
            case 'Cancelled': return <Chip icon={<CancelledIcon sx={{ fontSize: '16px !important' }} />} label="Cancelled" size="small" className="bg-red-50 text-red-600 font-bold border-red-100" />;
            default: return null;
        }
    };

    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Manage Orders</h2>
                    <p className="text-orange-500 font-medium">Track and process your latest sales</p>
                </div>
                <div className="flex gap-2">
                    <Tooltip title="Filter">
                        <IconButton className="bg-white shadow-sm border border-orange-100 text-orange-600 hover:bg-orange-50">
                            <FilterIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Export Report">
                        <IconButton className="bg-white shadow-sm border border-orange-100 text-orange-600 hover:bg-orange-50">
                            <DownloadIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>

            {/* Orders Table Card */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-orange-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-orange-50/50">
                            <tr>
                                <th className="p-6 font-bold text-orange-900 uppercase text-xs tracking-widest">Order Details</th>
                                <th className="p-6 font-bold text-orange-900 uppercase text-xs tracking-widest">Customer Info</th>
                                <th className="p-6 font-bold text-orange-900 uppercase text-xs tracking-widest">Items</th>
                                <th className="p-6 font-bold text-orange-900 uppercase text-xs tracking-widest">Status</th>
                                <th className="p-6 font-bold text-orange-900 uppercase text-xs tracking-widest text-right">Total Amount</th>
                                <th className="p-6 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-orange-50">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-orange-50/30 transition-colors">
                                    <td className="p-6">
                                        <p className="font-black text-gray-800">{order.id}</p>
                                        <p className="text-xs text-gray-400 font-medium">{order.date}</p>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600">
                                                {order.customer.charAt(0)}
                                            </div>
                                            <p className="font-bold text-gray-700">{order.customer}</p>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <p className="text-sm font-bold text-gray-500">{order.items} {order.items > 1 ? 'items' : 'item'}</p>
                                    </td>
                                    <td className="p-6">
                                        {getStatusChip(order.status)}
                                    </td>
                                    <td className="p-6 text-right">
                                        <p className="text-lg font-black text-orange-600">{order.amount}</p>
                                    </td>
                                    <td className="p-6 text-right">
                                        <IconButton size="small" className="text-gray-400 hover:text-orange-600">
                                            <MoreIcon />
                                        </IconButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Placeholder */}
                <div className="p-6 border-t border-orange-50 bg-gray-50/50 flex justify-between items-center">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Showing 4 of 124 orders</p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 rounded-xl bg-white border border-orange-100 text-orange-600 text-xs font-bold hover:bg-orange-50 transition-all">Previous</button>
                        <button className="px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold shadow-md shadow-orange-100 hover:bg-orange-600 transition-all">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
