import React from 'react';

interface IInput {
    name?: string;
    className?: string;
    onClick?: () => void;  // Add optional onClick handler for flexibility
}

const CardButton: React.FC<IInput> = ({ name, className, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}  // Use onClick if provided
            className={`${className} w-full border-2 hover:border-[#703f07] bg-[#703f07] hover:bg-white text-white hover:text-[#703f07] shadow-sm py-2 rounded-sm duration-300 ease-in`}
        >
            {name}
        </button>
    );
};

export default CardButton;
