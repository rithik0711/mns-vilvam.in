import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Owner = () => {
  return (
    <div className="flex h-screen bg-[#fffcf5] overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Owner;