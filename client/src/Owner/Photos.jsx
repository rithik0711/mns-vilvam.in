import React, { useState, useEffect } from 'react';
import {
    AddPhotoAlternate as AddPhotoIcon,
    Delete as DeleteIcon,
    CloudUpload as UploadIcon,
    Image as ImageIcon,
    Close as CloseIcon,
    Collections as AlbumIcon
} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const Photos = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [photos, setPhotos] = useState(() => {
        const saved = localStorage.getItem('mns_gallery');
        return saved ? JSON.parse(saved) : [
            { id: 1, title: 'Vilvam Harvest', category: 'Organic', date: 'Feb 20, 2026', url: 'https://images.unsplash.com/photo-1596503182181-e23ea515d045?auto=format&fit=crop&q=80&w=800' },
            { id: 2, title: 'Oil Extraction', category: 'Process', date: 'Feb 15, 2026', url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800' }
        ];
    });

    const [newPhoto, setNewPhoto] = useState({
        title: '',
        category: 'Organic',
        url: ''
    });

    useEffect(() => {
        localStorage.setItem('mns_gallery', JSON.stringify(photos));
    }, [photos]);

    const handleAddPhoto = (e) => {
        e.preventDefault();
        const photo = {
            ...newPhoto,
            id: Date.now(),
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
        setPhotos([photo, ...photos]);
        setNewPhoto({ title: '', category: 'Organic', url: '' });
        setShowAddForm(false);
    };

    const deletePhoto = (id) => {
        if (window.confirm('Delete this photo from public gallery?')) {
            setPhotos(photos.filter(p => p.id !== id));
        }
    };

    return (
        <div className="p-6 md:p-10 space-y-10 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h2 className="text-4xl font-black text-gray-800 tracking-tighter">Photo Management</h2>
                    <p className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mt-1">Manage public gallery content</p>
                </div>
                <button
                    onClick={() => setShowAddForm(true)}
                    className="bg-orange-500 text-white px-8 py-4 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-2xl shadow-orange-100 hover:bg-orange-600 transition-all flex items-center gap-3 active:scale-95"
                >
                    <AddPhotoIcon /> Upload New Photo
                </button>
            </div>

            {/* Upload Modal */}
            {showAddForm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-xl rounded-[3.5rem] p-10 shadow-2xl space-y-8 animate-in zoom-in-95 duration-300">
                        <div className="flex justify-between items-center">
                            <h3 className="text-3xl font-black text-gray-800 tracking-tighter uppercase">Add To Gallery</h3>
                            <IconButton onClick={() => setShowAddForm(false)} className="bg-gray-50">
                                <CloseIcon />
                            </IconButton>
                        </div>

                        <form onSubmit={handleAddPhoto} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Photo Title</label>
                                <input
                                    required
                                    type="text"
                                    value={newPhoto.title}
                                    onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                                    placeholder="Enter descriptive title"
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500 rounded-3xl px-6 py-4 outline-none transition-all font-bold text-gray-700"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Category</label>
                                <select
                                    value={newPhoto.category}
                                    onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value })}
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500 rounded-3xl px-6 py-4 outline-none transition-all font-bold text-gray-700 appearance-none"
                                >
                                    <option>Organic</option>
                                    <option>Process</option>
                                    <option>Packaging</option>
                                    <option>Events</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Image URL</label>
                                <input
                                    required
                                    type="text"
                                    value={newPhoto.url}
                                    onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
                                    placeholder="Paste image link here"
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500 rounded-3xl px-6 py-4 outline-none transition-all font-bold text-gray-700"
                                />
                            </div>

                            <button className="w-full bg-orange-500 text-white font-black py-5 rounded-[2rem] shadow-2xl shadow-orange-100 hover:bg-orange-600 transition-all uppercase tracking-[0.2em] text-xs">
                                Publish to Gallery
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {photos.map((photo) => (
                    <div key={photo.id} className="group relative bg-white rounded-[3rem] p-4 shadow-sm border border-orange-50 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative">
                            <img src={photo.url} alt={photo.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 gap-4">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">{photo.category}</span>
                                    <h4 className="text-xl font-black text-white leading-tight">{photo.title}</h4>
                                    <p className="text-[10px] text-white/50 font-bold uppercase">{photo.date}</p>
                                </div>
                                <button
                                    onClick={() => deletePhoto(photo.id)}
                                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 rounded-2xl hover:bg-red-500 hover:border-red-500 transition-all flex items-center justify-center gap-2 font-bold text-xs uppercase"
                                >
                                    <DeleteIcon fontSize="small" /> Delete Photo
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {photos.length === 0 && (
                    <div className="col-span-full py-20 flex flex-col items-center justify-center text-center opacity-30">
                        <AlbumIcon sx={{ fontSize: 100 }} className="mb-4" />
                        <h3 className="text-2xl font-black uppercase">No photos uploaded</h3>
                        <p className="font-bold">Start adding content to the public gallery</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Photos;
