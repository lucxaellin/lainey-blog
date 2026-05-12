import { Head } from '@inertiajs/react';

export default function AuthenticatedLayout({ header, children }) {
  return (
    <>
      <Head title="Profile" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
              {header}
            </h2>
            <div className="mt-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
