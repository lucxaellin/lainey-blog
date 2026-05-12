import React from 'react';

export default function UpdatePasswordForm({ className = "" }) {
  return (
    <div className={`bg-white p-4 shadow sm:rounded-lg sm:p-8 ${className}`}>
      <h3 className="text-lg font-medium mb-4">Update Password</h3>
      <p className="text-gray-600 mb-4">Enter your new password below:</p>
      <input
        type="password"
        className="w-full border border-gray-300 rounded-md px-3 py-2"
        placeholder="New password"
      />
      <div className="flex gap-4 mt-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          onClick={() => {
            // Handle update logic here
          }}
        >
          Update Password
        </button>
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
          onClick={() => {
            // Handle cancel logic here
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
