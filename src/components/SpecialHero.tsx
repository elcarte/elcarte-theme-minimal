import React from 'react';

export interface SpecialHeroProps {
    title: string;
    imageUrl?: string;
    subtitle?: string;
}

export const SpecialHero: React.FC<SpecialHeroProps> = ({ title, imageUrl, subtitle }) => {
    return (
        <div className="special-hero bg-indigo-900 text-white p-12 rounded-xl text-center border-4 border-indigo-500">
            <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-400">
                {title}
            </h1>
            {subtitle && <p className="text-xl italic mb-6">{subtitle}</p>}
            {imageUrl && (
                <div className="mt-8">
                    <img src={imageUrl} alt={title} className="mx-auto rounded-lg shadow-2xl max-h-96" />
                </div>
            )}
            <button className="mt-8 px-8 py-3 bg-white text-indigo-900 font-bold rounded-full hover:bg-gray-100 transition-colors">
                Shop Now
            </button>
        </div>
    );
};
