import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Importing faChevronDown for the dropdown icon

const SearchForm = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Search Box */}
      <div className="flex items-center mr-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {/* Dropdown Box */}
      <div className="relative">
        <select
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
            
          <option value="name">Sort by</option>
          <option value="name">Sort by Name</option>
          <option value="email">Sort by Email</option>
          <option value="company">Sort by Company Name</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FontAwesomeIcon icon={faChevronDown} /> {/* Adding the dropdown icon */}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
