import React from 'react';

interface ButtonProps {
  text: string;
  classNames?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, classNames = '', onClick }) => {
  return (
    <button 
      className={`bg-blue-500 text-white font-bold ${classNames} hover:bg-blue-600 transition-all duration-300 
      px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-md`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
