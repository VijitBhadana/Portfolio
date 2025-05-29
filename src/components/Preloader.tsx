import React from 'react';

const Preloader = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-sky-400 rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sky-400">
          VB
        </div>
      </div>
    </div>
  );
};

export default Preloader;