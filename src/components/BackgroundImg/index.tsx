import React from 'react';

export default function BackgroundImg() {
    return (
        <div className="w-full h-full fixed z-0 flex justify-center items-center">
            <img src="/bg.jpg" alt="logo" className="w-full h-full object-cover opacity-50" />
        </div>
    );
}