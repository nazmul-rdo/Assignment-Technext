import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Avatar from './Avatar';
import Flitter from './Filtter';

import { UsersContext } from '../App';

const User = () => {
  const sortedUsers = useContext(UsersContext);
  const users = sortedUsers.sortedUsers;

  console.log(users);
  return (
    <div className="container mx-auto bg-[#3b78cd]">
      <div className="flex items-end justify-end">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none">
          <Link to={'/adduser'} >Add User</Link>
        </button>
      </div>
      <Flitter />

      <div className="flex flex-wrap justify-center">
        {users.length > 0 ? (
          users.map((user, index) => (
            <UserCard user={user} key={index} />
          
          ))
        ) : (
          <div>No users available.</div>
        )}
      </div>
    </div>
  );
};

const UserCard = ({ user }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 p-8">
      <div className="card-background p-4 border">
        <div className="flex flex-column items-center py-4">
          <Avatar user={user} />
          <Link to={`/${user.id}`} className="text-xxx-large text-color font-bold flex justify-center">
          {user.firstName} {user.lastName}
        </Link>
          <h3 className="text-lg text-gray-500 font-bold dark:text-gray-400">
            {user.company.name}
          </h3>
        </div>

        <hr />

        <div className="icon-bg text-white py-8 rounded border">
          <h5 className="text-xxl text-gray-400 font-arial dark:text-gray-300">
            {' '}
            <FontAwesomeIcon icon={faEnvelope} /> {user.email}
          </h5>
          <h5 className="text-xxl text-gray-400 font-arial dark:text-gray-300">
            {' '}
            <FontAwesomeIcon icon={faLocationDot} /> {user.address.address},{' '}
            {user.address.city}
          </h5>
        </div>
      </div>
    </div>
  );
};


export { User, UserCard };

export default User;