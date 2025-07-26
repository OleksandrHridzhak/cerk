import React, { useState } from 'react';

type CategoryTabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
  index?: number; // Optional index prop for styling
};

export function CategoryTab({ label, isActive, onClick, index }: CategoryTabProps) {
  return (
    <li role="presentation" className="list-none">
      <button
        role="tab"
        aria-selected={isActive}
        tabIndex={isActive ? 0 : -1}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
            className={`
            cursor-pointer
            px-5 py-2 text-m font-bold rounded-xl 
            border border-transparent mb-2
            w-full text-center
            ${isActive ? 'bg-gray-c text-light-c border-gray-c ' : 'text-gray-c border-gray-c bg-light-c hover:bg-gray-c hover:text-light-c'}
            md:w-auto md:px-4 md:py-2 md:text-base md:text-left
            `}
      >
        {label}
      </button>
    </li>
  );
}
