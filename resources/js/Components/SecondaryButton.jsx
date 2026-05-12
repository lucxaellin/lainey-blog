import React from 'react';

export default function SecondaryButton({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
