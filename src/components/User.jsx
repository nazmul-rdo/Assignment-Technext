import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SearchForm from './SearchForm';
import Avatar from './Avatar';


const User = ({ users }) => {
  return (
    <div className="container mx-auto bg-[#3b78cd]">
      <h1>
        This a list of Avatar
      </h1>
      <SearchForm />

      <div className='flex flex-wrap justify-center'>
        {users.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

// const UserCard = ({ user }) => {
//   return (
//     <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 ">

//         <div className='min-h-2/3'>
//           <div className='flex justify-center items-center w-full border'>
//             <Avatar user={user} />
//           </div>
//           <div className='p-4 w-auto h-64 card-background '>
//             <Link to={`/${user.id}`} className="text-xxx-large text-blue-300 font-bold flex justify-center mb-4">
//               {user.firstName} {user.lastName}
//             </Link>
//             <hr className='bg-white h-1'/>

//             <div className="mt-8 flex flex-row justify-center items-center pb-10">
//               <p className='text-sm text-gray-500 dark:text-gray-400'>{user.company.name}</p>
//               <p>{user.email}</p>
//               <p className=''> {user.address.address}, {user.address.city}</p>
//             </div>
//               {/* <p>{user.email}</p>
//               <p className=''> {user.address.address}, {user.address.city}</p> */}

//           </div>
//       </div>
//     </div>
//   );
// };


const UserCard = ({ user }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 p-8">

{/* single card */}
      <div className='card-background p-4 border rotunded'>

{/* card header */}
        <div className=" flex flex-column items-center py-4 hover:opacity-5">
        <Avatar user={user} className="hover:opacity-5"/>
        <Link to={`/${user.id}`} className="text-xxx-large text-color font-bold flex justify-center">
          {user.firstName} {user.lastName}
        </Link>
        <h3 className='text-lg text-gray-500 font-bold dark:text-gray-400'>{user.company.name}</h3>
        </div>

        <hr />

        <div className='icon-bg text-white py-8 rounded border'>
        <h5 className="text-xxl text-gray-400 font-arial"> <FontAwesomeIcon icon={faEnvelope} /> {user.email}</h5>
        <h5 className="text-xxl text-gray-400 font-arial dark:text-gray-300"> <FontAwesomeIcon icon={faLocationDot} /> {user.address.address}, {user.address.city}</h5>
        </div>


{/* card header end*/}
      </div>
      
{/* single card end*/}
    </div>
  );
};


export { User, UserCard };
export default User;