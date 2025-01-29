import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
  paragraph: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, imageUrl, paragraph }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-red-400 hover:text-red-600"
          aria-label="Close Modal"
        >
          ×
        </button>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{title}</h2>
        {/* Display the description */}
        <p className="text-gray-500 text-lg sm:text-base mb-4">{description}</p>
        <img src={imageUrl} alt={title} className="w-full h-auto sm:h-64 object-cover rounded-lg mb-4" />
        <p className="text-gray-700 text-lg sm:text-base mb-4">{paragraph}</p>
      </div>
    </div>
  );
};

export default Modal;
