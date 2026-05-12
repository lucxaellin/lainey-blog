import React from 'react';

export default function DeleteUserForm({ className = "" }) {
  return (
    <div className={`bg-white p-4 shadow sm:rounded-lg sm:p-8 ${className}`}>
      <h3 className="text-lg font-medium mb-4">Delete User</h3>
      <p className="text-gray-600 mb-4">Are you sure you want to delete this user?</p>
      <div className="flex gap-4">
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
          onClick={() => {
            // Handle delete logic here
          }}
        >
          Yes, Delete User
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
