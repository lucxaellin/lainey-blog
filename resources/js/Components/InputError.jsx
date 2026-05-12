import React from 'react';

export default function InputError({ message }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
      <div className="flex items-center">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 0-6h6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15l-9 0-6h6" />
        </svg>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium">Input Error</h3>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}
