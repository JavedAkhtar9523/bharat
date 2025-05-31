


import React from 'react';
import logo from '../../assets/logo.png'; 

interface NewsBharatLogoProps {
  className?: string;
  size?: number; 
  withText?: boolean; 
}

const NewsBharatLogo: React.FC<NewsBharatLogoProps> = ({ 
  className = '', 
  size = 55,
  withText = false
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div 
        className="bg-red-600 p-1 rounded flex items-center justify-center"
        style={{ minWidth: size, minHeight: size }}
      >
        <img 
          src={logo} 
          alt="News Bharat Logo" 
          className="object-contain"
          style={{ 
            width: size - 8, 
            height: size - 8 
          }}
        />
      </div>
      
      {withText && (
        <div className="ml-2 font-bold text-red-600" style={{ fontSize: size * 0.6 }}>
          Bharat
        </div>
      )}
    </div>
  );
};

export default NewsBharatLogo;