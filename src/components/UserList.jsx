import React from "react";

const UserList = ({ users, searchTerm, handleSearch, sortBy, handleSort }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-md mr-2"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          className="p-2 border border-gray-300 rounded-md"
          value={sortBy}
          onChange={handleSort}
        >
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="company">Company</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 border border-gray-300 rounded-md"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <div className="text-center">
              <h3 className="text-lg font-bold">{user.name}</h3>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-gray-500">{user.company.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;