import Card from '../Card';
import React from 'react';

export default function Blogs() {
    return (
        <div className="mt-16">
            <h4 className="text-white text-2xl mb-5 text-center">
                <code>
                    Blogs
                </code>
            </h4>
            <div className="w-full flex flex-row grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-4">
                <Card />
                <Card />
                <Card />
            </div>
            <div className="w-full flex items-center justify-center mt-5">
                <button className="dark:bg-white bg-black dark:text-black text-white  w-48 py-1 rounded-sm text-sm items-center justify-around flex mt-5">
                    View All Blogs
                </button>
            </div>
        </div>
    )
}