import React from 'react';
import {
    Email as EmailIcon,
    Phone as PhoneIcon,
    PersonPin as ProfileIcon,
    History as HistoryIcon,
    Block as BlockIcon,
    MoreVert as MoreIcon,
    PersonAdd as AddCustomerIcon,
    Search as SearchIcon
} from '@mui/icons-material';
import { IconButton, Chip, Tooltip, InputBase, Paper } from '@mui/material';

const Customers = () => {
    const customers = [
        { id: '#CUST-001', name: 'Rithik Eswaran', email: 'rithikeswaran2005@gmail.com', phone: '+91 98765 43210', orders: 12, spent: '₹ 15,450.00', status: 'Premium' },
        { id: '#CUST-002', name: 'Anitha Raj', email: 'anitha.raj@gmail.com', phone: '+91 87654 32109', orders: 4, spent: '₹ 3,850.00', status: 'New' },
        { id: '#CUST-003', name: 'Senthil Kumar', email: 'senthil.k@yahoo.com', phone: '+91 76543 21098', orders: 25, spent: '₹ 42,200.00', status: 'VIP' },
        { id: '#CUST-004', name: 'Vijay Shankar', email: 'vijay.v@outlook.com', phone: '+91 65432 10987', orders: 8, spent: '₹ 9,100.00', status: 'Active' },
    ];

    const getStatusChip = (status) => {
        switch (status) {
            case 'Premium': return <Chip label="Premium" size="small" className="bg-orange-100 text-orange-600 font-black border-orange-200" />;
            case 'New': return <Chip label="New Member" size="small" className="bg-blue-50 text-blue-600 font-bold border-blue-100" />;
            case 'VIP': return <Chip label="VIP Member" size="small" className="bg-purple-50 text-purple-600 font-bold border-purple-100" />;
            case 'Active': return <Chip label="Active" size="small" className="bg-green-50 text-green-600 font-bold border-green-100" />;
            default: return null;
        }
    };

    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Our Customers</h2>
                    <p className="text-orange-500 font-medium">Build and maintain healthy relationships</p>
                </div>
                <div className="flex gap-3">
                    <Paper
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, boxShadow: 'none', border: '1px solid #ffedd5', borderRadius: '12px' }}
                    >
                        <IconButton sx={{ p: '10px', color: '#f97316' }}>
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1, fontSize: '0.8rem' }}
                            placeholder="Search customers..."
                        />
                    </Paper>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg shadow-orange-100 transition-all flex items-center gap-2">
                        <AddCustomerIcon />
                        Add Customer
                    </button>
                </div>
            </div>

            {/* Customers Table Card */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-orange-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-orange-50/50">
                            <tr>
                                <th className="p-6 font-bold text-orange-900 uppercase text-xs tracking-widest">Customer Profile</th>
                                <th className="p-6 font-bold text-orange-900 uppercase text-xs tracking-widest">Contact Info</th>
                                <th className="p-6 font-bold text-orange-900 uppercase text-xs tracking-widest text-center">Orders</th>
                                <th className="p-6 font-bold text-orange-900 uppercase text-xs tracking-widest text-center">Total Spent</th>
                                <th className="p-6 font-bold text-orange-900 uppercase text-xs tracking-widest">Status</th>
                                <th className="p-6 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-orange-50">
                            {customers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-orange-50/30 transition-colors group">
                                    <td className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center font-black text-orange-600 text-lg shadow-inner group-hover:scale-110 transition-transform">
                                                {customer.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-black text-gray-800 leading-none">{customer.name}</p>
                                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter mt-1">{customer.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                                                <EmailIcon sx={{ fontSize: 14 }} className="text-orange-400" /> {customer.email}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                                                <PhoneIcon sx={{ fontSize: 14 }} className="text-orange-400" /> {customer.phone}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6 text-center">
                                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-bold text-gray-600">{customer.orders}</span>
                                    </td>
                                    <td className="p-6 text-center">
                                        <p className="text-md font-black text-orange-600">{customer.spent}</p>
                                    </td>
                                    <td className="p-6">
                                        {getStatusChip(customer.status)}
                                    </td>
                                    <td className="p-6 text-right">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex justify-end gap-1">
                                            <Tooltip title="View History">
                                                <IconButton size="small" className="text-orange-400 hover:bg-orange-50">
                                                    <HistoryIcon fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Ban Customer">
                                                <IconButton size="small" className="text-red-400 hover:bg-red-50">
                                                    <BlockIcon fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                            <IconButton size="small" className="text-gray-400 hover:text-orange-600">
                                                <MoreIcon />
                                            </IconButton>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Customers;
