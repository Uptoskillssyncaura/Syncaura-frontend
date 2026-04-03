
import React from "react";

const CoAdmin = () => {
  return (
    <div className="p-6 space-y-6">

      {/* Page title */}
      <h1 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Co-Admin Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">

  <div className="bg-white shadow rounded-lg p-4 hover:shadow-md hover:-translate-y-1 transition duration-200">
    <p className="text-gray-500 text-sm">Total Users</p>
    <h2 className="text-2xl font-semibold text-black dark:text-white">120</h2>
  </div>

  <div className="bg-white shadow rounded-lg p-4 hover:shadow-md hover:-translate-y-1 transition duration-200">
    <p className="text-gray-500 text-sm">Active Users</p>
    <h2 className="text-2xl font-semibold text-black dark:text-white">98</h2>
  </div>

  <div className="bg-white shadow rounded-lg p-4 hover:shadow-md hover:-translate-y-1 transition duration-200">
    <p className="text-gray-500 text-sm">Pending Requests</p>
    <h2 className="text-2xl font-semibold text-black dark:text-white">12</h2>
  </div>

  <div className="bg-white shadow rounded-lg p-4 hover:shadow-md hover:-translate-y-1 transition duration-200">
    <p className="text-gray-500 text-sm">Reports</p>
    <h2 className="text-2xl font-semibold text-black dark:text-white">5</h2>
  </div>

</div>


{/* Top Dashboard Sections */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  {/* Sprint Health */}
  <div className="bg-white shadow rounded-lg p-6">

    <h2 className="text-lg font-semibold mb-4 text-black">
      Sprint Health
    </h2>

    <div className="flex items-center justify-center py-4">
      <div className="w-32 h-32 rounded-full border-8 border-green-500 flex items-center justify-center">
        <span className="text-xl font-bold text-black dark:text-white">
          90%
        </span>
      </div>
    </div>

  </div>

  {/* Sprint Status */}
  <div className="bg-white shadow rounded-lg p-6">

    <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">
      Sprint Status
    </h2>

    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-blue-500 h-3 rounded-full"
        style={{ width: "62%" }}
      ></div>
    </div>

    <p className="text-sm text-gray-500 mt-2">
      62% completed
    </p>

  </div>

</div>   {/* ← CLOSE GRID */}

{/* Project Progress */}
<div className="bg-white shadow rounded-lg p-6">

  <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">
    Project Progress
  </h2>

  <div className="space-y-4">

    {/* Frontend */}
    <div>
      <p className="text-sm mb-1">Frontend</p>
      <div className="bg-gray-200 h-2 rounded">
        <div className="bg-blue-500 h-2 rounded w-[70%]"></div>
      </div>
    </div>

    {/* Backend */}
    <div>
      <p className="text-sm mb-1">Backend</p>
      <div className="bg-gray-200 h-2 rounded">
        <div className="bg-green-500 h-2 rounded w-[50%]"></div>
      </div>
    </div>

    {/* Testing */}
    <div>
      <p className="text-sm mb-1">Testing</p>
      <div className="bg-gray-200 h-2 rounded">
        <div className="bg-yellow-500 h-2 rounded w-[40%]"></div>
      </div>
    </div>

  </div>

</div>



      {/* User Management Section */}
      <div className="bg-white shadow rounded-lg p-6">

        <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">
          User Management
        </h2>
       
       {/* Search + Filter */}
<div className="flex justify-between mb-4">

<input
  type="text"
  placeholder="Search users..."
  className="border rounded px-3 py-2 text-sm w-64"
/>

<select className="border rounded px-3 py-2 text-sm w-64">
  <option>All Roles</option>
  <option>User</option>
  <option>Admin</option>
  <option>Co-Admin</option>
</select>

</div>

        {/* Table */}
        <table className="w-full border">

          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t hover:bg-gray-50 transition duration-150">
              <td className="p-3 text-black dark:text-white">
  John Doe
</td>
              <td className="p-3 text-black dark:text-white">john@email.com</td>
              <td className="p-3 text-black dark:text-white">User</td>
              <td className="text-green-500">Active</td>
              <td>
                <button
  title="Edit user"
  className="text-blue-500 hover:underline mr-3"
>
  Edit
</button>

<button
  title="Deactivate user"
  className="text-red-500 hover:underline"
>
  Deactivate
</button>
              </td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default CoAdmin;