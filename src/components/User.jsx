import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Avatar from './Avatar';
import Flitter from './Filtter';

import { UsersContext } from '../App';

const User = () => {
  const {sortedUsers} = useContext(UsersContext);
  const users = sortedUsers;

  console.log(users);
  return (
    <div className="container mx-auto bg-[#3b78cd]">
      <div className="flex items-end justify-end">

        <button 
        className=" bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none mt-4"
        aria-label=""
        >
          <Link
            to={'/adduser'}
            className="bg-btn_primary py-2.5 px-8 rounded-full"
          >Add User</Link>
        </button>

      </div>
      <Flitter />

      <div className="flex flex-wrap mix-w-5xl justify-center">
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

export const UserCard = ({ user }) => {

  const name =  user.firstName +" "+ user.lastName;
  const address =  user.address.address+ ", " + user.address.city;

 
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 p-8">
      <div className=" card-background p-4 rounded">
        <div className="flex flex-column items-center py-4">
          <Avatar user={user} />
          <Link to={`/${user.id}`} className="text-xxx-large text-color font-bold">
           {name}
          </Link>
          <h3 className="text-lg text-gray-500 font-bold dark:text-gray-400">
            {user.company.name}
          </h3>
        </div>

        <div className="icon-bg text-white py-8 rounded">
          <p className="text-xxl text-gray-400 dark:text-gray-300">
            <FontAwesomeIcon icon={faEnvelope} /> {user.email}
          </p>
          <p className="text-xxl text-gray-400 dark:text-gray-300">
            <FontAwesomeIcon icon={faLocationDot} /> {address}
          </p>
        </div>
      </div>
    </div>
  );
};


export default User;
