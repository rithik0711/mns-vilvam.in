import React, { useState, useEffect } from 'react';
import {
    Add as AddIcon,
    CloudUpload as UploadIcon,
    Close as CloseIcon,
    Inventory as StockIcon,
    Category as CategoryIcon,
    Description as DescIcon,
    LocalOffer as PriceIcon,
    CheckCircle as ActiveIcon,
    Cancel as InactiveIcon,
    Delete as DeleteIcon,
    Edit as EditIcon
} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const Products = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem('mns_products');
        return saved ? JSON.parse(saved) : [
            {
                id: 1,
                name: 'Pure Vilvam Oil',
                category: 'Essential Oil',
                description: '100% pure and organic Vilvam oil for spiritual and health benefits.',
                price: 450.00,
                stock: 50,
                status: 'Active',
                imagesCount: 0
            }
        ];
    });

    const [newProduct, setNewProduct] = useState({
        name: '',
        category: '',
        description: '',
        price: '',
        stock: '',
        status: 'Active',
        images: []
    });

    useEffect(() => {
        localStorage.setItem('mns_products', JSON.stringify(products));
    }, [products]);

    const categories = ['Essential Oil', 'Hair Oil', 'Body Oil', 'Special Blends', 'Natural Soap', 'Herbal Powder'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        // Note: For a real app, you'd upload these. Here we'll just track count for UI
        setNewProduct(prev => ({
            ...prev,
            images: [...prev.images, ...files]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Date.now(); // More unique ID
        setProducts(prev => [...prev, {
            ...newProduct,
            id,
            price: parseFloat(newProduct.price),
            stock: parseInt(newProduct.stock),
            imagesCount: newProduct.images.length,
            images: [] // Don't save binary in localStorage
        }]);
        setNewProduct({
            name: '',
            category: '',
            description: '',
            price: '',
            stock: '',
            status: 'Active',
            images: []
        });
        setShowAddForm(false);
    };

    const deleteProduct = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setProducts(prev => prev.filter(p => p.id !== id));
        }
    };

    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Product Inventory</h2>
                    <p className="text-orange-500 font-medium tracking-wide font-bold">Total Collection: {products.length} Items</p>
                </div>
                <button
                    onClick={() => setShowAddForm(true)}
                    className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black py-4 px-8 rounded-2xl shadow-xl shadow-orange-100 transition-all duration-300 flex items-center gap-3 hover:scale-105 active:scale-95"
                >
                    <AddIcon />
                    ADD NEW PRODUCT
                </button>
            </div>

            {/* Product Form Modal */}
            {showAddForm && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-[100] p-4 animate-in fade-in duration-300">
                    <div className="bg-white w-full max-w-3xl rounded-[3rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-orange-100 scale-in-center overflow-y-auto">
                        {/* Modal Header */}
                        <div className="p-10 border-b border-orange-50 flex justify-between items-center bg-orange-50/30">
                            <div>
                                <h3 className="text-3xl font-black text-gray-800 uppercase tracking-tighter">New Product Details</h3>
                                <p className="text-orange-600 font-bold text-sm">Fill in the fields accurately to list your product</p>
                            </div>
                            <IconButton onClick={() => setShowAddForm(false)} className="bg-white shadow-md hover:bg-red-50 group">
                                <CloseIcon className="text-orange-600 group-hover:text-red-500" />
                            </IconButton>
                        </div>

                        {/* Modal Body */}
                        <form onSubmit={handleSubmit} className="flex-1 p-10 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Product Name */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                        Product Name *
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Enter product name"
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white outline-none transition-all font-bold text-gray-700"
                                        value={newProduct.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                {/* Category */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                        Oil Category *
                                    </label>
                                    <select
                                        name="category"
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white outline-none transition-all font-bold text-gray-700 appearance-none"
                                        value={newProduct.category}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                </div>

                                {/* Price */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                        Price (₹) *
                                    </label>
                                    <input
                                        name="price"
                                        type="number"
                                        step="0.01"
                                        placeholder="0.00"
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white outline-none transition-all font-bold text-gray-700"
                                        value={newProduct.price}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                {/* Stock */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                        Stock Quantity *
                                    </label>
                                    <input
                                        name="stock"
                                        type="number"
                                        placeholder="0"
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white outline-none transition-all font-bold text-gray-700"
                                        value={newProduct.stock}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-3">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                    Detailed Description *
                                </label>
                                <textarea
                                    name="description"
                                    rows="4"
                                    placeholder="Describe the product benefits, usage, etc..."
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white outline-none transition-all resize-none font-medium text-gray-600"
                                    value={newProduct.description}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Images Upload */}
                            <div className="space-y-3">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                    Product Images *
                                </label>
                                <div className="relative group">
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                        id="image-upload"
                                    />
                                    <label
                                        htmlFor="image-upload"
                                        className="flex flex-col items-center justify-center w-full h-40 border-4 border-dashed border-orange-50 rounded-[2rem] cursor-pointer bg-orange-50/20 hover:bg-orange-50 hover:border-orange-200 transition-all group"
                                    >
                                        <div className="p-4 rounded-full bg-white shadow-sm mb-3 group-hover:scale-110 transition-transform">
                                            <UploadIcon className="text-orange-500" fontSize="large" />
                                        </div>
                                        <span className="text-sm text-gray-400 group-hover:text-orange-600 font-bold uppercase tracking-widest">Click to upload images</span>
                                    </label>
                                </div>
                                {newProduct.images.length > 0 && (
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {newProduct.images.map((img, i) => (
                                            <div key={i} className="px-4 py-2 rounded-xl bg-orange-100 text-[10px] font-black text-orange-600 uppercase">File {i + 1}</div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Status */}
                            <div className="space-y-3">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Initial Status *</label>
                                <div className="flex gap-6">
                                    {['Active', 'Inactive'].map(status => (
                                        <button
                                            key={status}
                                            type="button"
                                            onClick={() => setNewProduct(prev => ({ ...prev, status }))}
                                            className={`flex-1 py-4 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 border-2 ${newProduct.status === status
                                                    ? 'bg-orange-500 border-orange-500 text-white shadow-xl shadow-orange-100'
                                                    : 'bg-white border-gray-100 text-gray-400 hover:border-orange-100 hover:text-orange-400'
                                                }`}
                                        >
                                            {status === 'Active' ? <ActiveIcon /> : <InactiveIcon />}
                                            {status}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </form>

                        {/* Modal Footer */}
                        <div className="p-10 border-t border-orange-50 bg-gray-50/50 flex gap-6">
                            <button
                                type="button"
                                onClick={() => setShowAddForm(false)}
                                className="flex-1 py-4 rounded-2xl font-black text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all uppercase tracking-widest"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="flex-1 py-4 rounded-2xl font-black bg-orange-500 text-white shadow-2xl shadow-orange-100 hover:bg-orange-600 transition-all uppercase tracking-widest scale-105 active:scale-95"
                            >
                                Publish Product
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {products.map(product => (
                    <div key={product.id} className="group bg-white rounded-[3rem] p-5 shadow-sm hover:shadow-2xl transition-all duration-500 border border-orange-50 relative overflow-hidden flex flex-col">
                        {/* Status Badge */}
                        <div className={`absolute top-8 right-8 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${product.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                            }`}>
                            {product.status}
                        </div>

                        {/* Image Body */}
                        <div className="h-56 bg-[#fffbf2] rounded-[2.5rem] mb-6 flex items-center justify-center overflow-hidden relative group-hover:scale-[0.98] transition-all duration-500 shadow-inner">
                            <StockIcon className="text-orange-100 animate-pulse" sx={{ fontSize: 80 }} />
                            {product.imagesCount > 0 && (
                                <div className="absolute bottom-4 right-4 bg-orange-600 text-white p-2 rounded-xl text-[10px] font-black">
                                    +{product.imagesCount} IMGS
                                </div>
                            )}
                        </div>

                        {/* Content Body */}
                        <div className="flex-1 space-y-4 px-2">
                            <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest border-b-2 border-orange-100 pb-1">{product.category}</span>
                            <h3 className="font-black text-gray-800 text-xl leading-tight line-clamp-1">{product.name}</h3>
                            <p className="text-xs text-gray-400 font-bold line-clamp-2 h-8 leading-relaxed uppercase tracking-tighter">{product.description}</p>

                            <div className="flex justify-between items-end pt-4">
                                <div>
                                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Price Value</p>
                                    <p className="text-2xl font-black text-orange-600 tracking-tighter">₹{product.price.toFixed(2)}</p>
                                </div>
                                <div className="text-right">
                                    <div className={`px-4 py-1.5 rounded-2xl text-[10px] font-black tracking-widest ${product.stock < 10 ? 'bg-red-50 text-red-500' : 'bg-orange-50 text-orange-600'}`}>
                                        {product.stock} UNITS
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/80 to-transparent backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                            <button className="bg-white text-orange-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
                                <EditIcon />
                            </button>
                            <button
                                onClick={() => deleteProduct(product.id)}
                                className="bg-white text-red-500 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
                            >
                                <DeleteIcon />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {products.length === 0 && (
                <div className="py-20 flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                        <StockIcon className="text-orange-200" sx={{ fontSize: 40 }} />
                    </div>
                    <h3 className="text-xl font-black text-gray-400 uppercase tracking-widest">No products found</h3>
                    <p className="text-gray-300 font-bold">Start by adding your first product to the inventory</p>
                </div>
            )}
        </div>
    );
};

export default Products;