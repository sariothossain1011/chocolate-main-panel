import React from 'react';

interface IInput {
    name?: string;
    className?: string;
    onClick?: () => void;  // Add optional onClick handler for flexibility
}

const Button: React.FC<IInput> = ({ name, className, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}  // Use onClick if provided
            className={`${className} w-full bg-[#33101C] hover:bg-[#f0c76e] text-white hover:text-[#33101C] text-sm font-semibold shadow-sm py-3 rounded-full duration-300 ease-in`}
        >
            {name}
        </button>
    );
};

export default Button;
