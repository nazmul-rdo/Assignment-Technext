import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';
import SearchForm from './SearchForm';
import Avatar from './Avatar';


const User = ({ users }) => {
  return (
    <div className="container mx-auto bg-[#3b78cd]">
      <h1>
        This a list of Avatar
      </h1>
      <SearchForm />

      <div className='flex flex-wrap justify-center '>
        {users.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

const UserCard = ({ user }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 ">

      <div className="rounded-lg flex-col items-center p-4 bg-[#b8c6d9]">

        <div className=' bg-[#f1f9f9]'>
          <div className='h-32 flex justify-center items-center w-full p-8 mb-4'>
            {/* <img src={user.image} alt="Avatar" className="w-16 h-auto opacity-0" /> */}
            <Avatar user={user} />
            
          </div>

          <div className='p-4'>

            <Link to={`/${user.id}`} className="w-full text-blue-500 font-bold text-lg text-center mb-2">
              {user.firstName} {user.lastName}
            </Link>

            <div className="flex gap-4 items-center text-gray-600 text-center mb-2">
              <FontAwesomeIcon icon={faBuilding} className="pr-4" />
              <p>{user.company.name}</p>
            </div>

            <div className="flex justify-start items-center text-gray-600 text-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="pr-4" />
              <p>{user.email}</p>
            </div>

            <div className="flex justify-start items-center text-gray-600 text-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="pr-4" />
              <p className=''> {user.address.address}, {user.address.city}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export { User, UserCard };
export default User;