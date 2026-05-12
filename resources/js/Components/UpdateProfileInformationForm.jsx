import React from 'react';

export default function UpdateProfileInformationForm({ className = "" }) {
  return (
    <div className={`bg-white p-4 shadow sm:rounded-lg sm:p-8 ${className}`}>
      <h3 className="text-lg font-medium mb-4">Update Profile Information</h3>
      <p className="text-gray-600 mb-4">Update your profile information below:</p>
      <div className="space-y-4">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="Name"
        />
        <input
          type="email"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="Email"
        />
        <textarea
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="Bio"
          rows="4"
        />
      </div>
      <div className="flex gap-4 mt-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          onClick={() => {
            // Handle update logic here
          }}
        >
          Update Profile
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
