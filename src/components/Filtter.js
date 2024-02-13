import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'; 

import { UsersContext } from '../App';

const Flitter = () => {
  const { searchQuery, handleSearchInputChange, sortOption, handleSortOptionChange } = useContext(UsersContext);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col justify-between lg:justify-end sm:flex-row items-center gap-3">
        <div className="relative text-gray-600">
          <input 
            className=" border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button 
          className="absolute right-0 top-0 mt-2 mr-4 text-blue-500"
          aria-label=""
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="relative">
          <select
            className="block appearance-none bg-white border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={sortOption}
            onChange={handleSortOptionChange}
          >
            <option value="">Sort by</option>
            <option value="name">Sort by Name</option>
            <option value="email">Sort by Email</option>
            <option value="company">Sort by Company</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-500">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flitter;