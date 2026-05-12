import React from 'react';

export default function DangerButton({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
