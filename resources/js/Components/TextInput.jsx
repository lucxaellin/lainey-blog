import React from 'react';

export default function TextInput({ className = "", ...props }) {
  return (
    <input
      type="text"
      className={`w-full border border-gray-300 rounded-md px-3 py-2 ${className}`}
      {...props}
    />
  );
}
