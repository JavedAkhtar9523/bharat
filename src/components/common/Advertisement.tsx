import React from 'react';

interface AdvertisementProps {
  image: string;
  link: string;
  size?: 'banner' | 'square' | 'sidebar';
}

const Advertisement: React.FC<AdvertisementProps> = ({
  image,
  link,
  size = 'banner'
}) => {
  const sizeClasses = {
    banner: 'w-full h-24 md:h-32',
    square: 'w-full h-64',
    sidebar: 'w-full h-80',
  };
  
  return (
    <div className="bg-gray-100 border border-gray-200 rounded overflow-hidden relative">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${sizeClasses[size]}`}
      >
        <img
          src={image}
          alt="Advertisement"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 text-xs px-1 py-0.5">
          Ad
        </div>
      </a>
    </div>
  );
};

export default Advertisement;