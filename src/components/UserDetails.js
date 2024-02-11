
import { useContext } from "react";
import { UsersContext } from '../App';

import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Avatar from './Avatar';

const UserDetails = () => {

const sortedUsers = useContext(UsersContext);
const users = sortedUsers.sortedUsers;

    const { id } = useParams();
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return <div>User not found</div>;
    }

    return (

        <div className="container mx-auto flex flex-col justify-center items-center">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none">
                <Link to={'/'}>Back to Home</Link>
            </button>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 p-8">
                <div className='card-background p-4 border'>
                    <div className=" flex flex-column items-center py-4">
                        <Avatar user={user} />
                        <h1 className="text-xxx-large text-color font-bold flex justify-center">
                            {user.firstName} {user.lastName}
                        </h1>
                        <h3 className='text-lg text-gray-500 font-bold dark:text-gray-400'>{user.company.name}</h3>
                    </div>

                    <hr />

                    <div className='icon-bg text-white py-8 rounded border'>
                        <h5 className="text-xxl text-gray-400 font-arial dark:text-gray-300"> <FontAwesomeIcon icon={faEnvelope} /> {user.email}</h5>
                        <h5 className="text-xxl text-gray-400 font-arial dark:text-gray-300"> <FontAwesomeIcon icon={faLocationDot} /> {user.address.address}, {user.address.city}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;