import React, { useState, useEffect } from 'react';
import {
    Collections as AlbumIcon,
    ZoomIn as ZoomIcon,
    X as CloseIcon,
    CameraAlt as CameraIcon,
    FilterAlt as FilterIcon
} from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        const saved = localStorage.getItem('mns_gallery');
        if (saved) {
            setPhotos(JSON.parse(saved));
        } else {
            // Default content if nothing saved
            setPhotos([
                { id: 1, title: 'Vilvam Harvest', category: 'Organic', date: 'Feb 20, 2026', url: 'https://images.unsplash.com/photo-1596503182181-e23ea515d045?auto=format&fit=crop&q=80&w=800' },
                { id: 2, title: 'Oil Extraction', category: 'Process', date: 'Feb 15, 2026', url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800' }
            ]);
        }
    }, []);

    const categories = ['All', ...new Set(photos.map(p => p.category))];
    const filteredPhotos = activeFilter === 'All' ? photos : photos.filter(p => p.category === activeFilter);

    return (
        <div className="p-6 md:p-10 space-y-12 animate-in fade-in duration-1000">
            {/* Header section */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">
                    <div className="w-8 h-0.5 bg-orange-500"></div>
                    Visual Journey
                    <div className="w-8 h-0.5 bg-orange-500"></div>
                </div>
                <h2 className="text-5xl font-black text-gray-800 tracking-tighter uppercase italic">The Vilvam Gallery</h2>
                <p className="text-gray-500 font-medium leading-relaxed">Witness the purity of our process and the organic beauty of our products through our lens.</p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-sm ${activeFilter === cat
                                ? 'bg-orange-500 text-white shadow-xl shadow-orange-100 scale-105'
                                : 'bg-white text-gray-400 hover:bg-orange-50 hover:text-orange-500 border border-orange-50'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Masonry-style Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredPhotos.map((photo) => (
                    <div
                        key={photo.id}
                        className="group relative bg-white rounded-[3rem] p-4 shadow-sm border border-orange-50 hover:shadow-2xl transition-all duration-700 overflow-hidden cursor-zoom-in"
                        onClick={() => setSelectedPhoto(photo)}
                    >
                        <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden relative">
                            <img src={photo.url} alt={photo.title} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 text-white scale-50 group-hover:scale-100 transition-transform duration-500">
                                    <ZoomIcon fontSize="large" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 z-10 translate-y-20 group-hover:translate-y-0 transition-transform duration-700 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[2rem] text-white">
                                <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">{photo.category}</span>
                                <h4 className="text-lg font-black leading-tight mt-1">{photo.title}</h4>
                                <p className="text-[10px] opacity-60 font-bold uppercase mt-1">{photo.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedPhoto && (
                <div className="fixed inset-0 bg-black/95 z-[200] flex flex-col p-6 animate-in fade-in duration-500">
                    <div className="flex justify-end p-4">
                        <IconButton
                            onClick={() => setSelectedPhoto(null)}
                            className="bg-white/10 hover:bg-white/20 text-white w-14 h-14"
                        >
                            <span className="font-black text-2xl">×</span>
                        </IconButton>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-4">
                        <img
                            src={selectedPhoto.url}
                            alt={selectedPhoto.title}
                            className="max-w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl animate-in zoom-in-95 duration-500"
                        />
                    </div>
                    <div className="text-center p-10 space-y-2">
                        <h4 className="text-3xl font-black text-white uppercase tracking-tighter">{selectedPhoto.title}</h4>
                        <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">{selectedPhoto.category} • {selectedPhoto.date}</p>
                    </div>
                </div>
            )}

            {filteredPhotos.length === 0 && (
                <div className="py-40 flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center animate-bounce">
                        <CameraIcon className="text-orange-200" fontSize="large" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-2xl font-black text-gray-800 uppercase tracking-widest">Gallery Empty</h3>
                        <p className="text-gray-400 font-medium">We're capturing new memories. Come back soon!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
