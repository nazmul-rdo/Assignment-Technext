
import { useContext } from "react";
import { UsersContext } from '../App';

import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Avatar from './Avatar';

const UserDetails = () => {
    const { sortedUsers } = useContext(UsersContext);
    const users = sortedUsers;



    const { id } = useParams();
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return <div>User not found</div>;
    }

    
    const name = user.firstName + " " + user.lastName;
    const address = user.address.address + ", " + user.address.city;
    return (
        <div className="container mx-auto flex flex-col justify-center items-center">
            <button
                className=" bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none mt-4"
                aria-label=""
            >
                <Link
                    to={'/'}
                    className="bg-btn_primary py-2.5 px-8 rounded-full"
                >
                    Back to Home
                </Link>
            </button>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 p-8">
                <div className='card-background p-4 rounded'>
                    <div className=" flex flex-column items-center py-4">
                        <Avatar user={user} />
                        <h1 className="text-xxx-large text-color font-bold flex justify-center">
                            {name}
                        </h1>
                        <h3 className='text-lg text-gray-500 font-bold dark:text-gray-400'>
                            {user.company.name}
                        </h3>
                    </div>
                    <div className='icon-bg text-white py-8 rounded border'>
                        <p className="text-xxl text-gray-400 font-arial dark:text-gray-300">
                            <FontAwesomeIcon icon={faEnvelope} /> {user.email}
                        </p>
                        <p className="text-xxl text-gray-400 font-arial dark:text-gray-300">
                            <FontAwesomeIcon icon={faLocationDot} /> {address}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;