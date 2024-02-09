import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ users }) => {
  return (
    <div className="container mx-auto">
      <div className="">
        
      </div>
      
        <div className=' flex w-full bg-white shadow-xl shadow-neutral-100 border'>
        {users.map((user, index) => (
          // <SingleUser user={user} key={index} />      
          
          <div className='p-10 flex flex-wrap-wrapper w-1/4'>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src={user.image} alt="Avatar" className="rounded-full w-16 h-16 mx-auto mb-2" />
            <Link to={`/${user.id}`} className="text-blue-500 font-bold text-center block">
              {user.firstName} {user.lastName}
            </Link>
    
            <p className="text-gray-600 text-center">Email: {user.email}</p>
            <p className="text-gray-600 text-center">
              Address: {user.address.address},  {user.address.city}
            </p>
            <p className="text-gray-600 text-center">Company Name: {user.company.name}</p>
          </div>
        </div>
        ))}
        </div>
    </div>
  );
};

// const SingleUser = ({ user }) => {
//   return (
//     <div className='w-64'>
//       <div className="bg-white rounded-lg shadow-md p-4">
//         <img src={user.image} alt="Avatar" className="rounded-full w-16 h-16 mx-auto mb-2" />
//         <Link to={`/${user.id}`} className="text-blue-500 font-bold text-center block">
//           {user.firstName} {user.lastName}
//         </Link>

//         <p className="text-gray-600 text-center">Email: {user.email}</p>
//         <p className="text-gray-600 text-center">
//           Address: {user.address.street}, {user.address.suite}, {user.address.city}
//         </p>
//         <p className="text-gray-600 text-center">Company Name: {user.company.name}</p>
//       </div>
//     </div>
//   );
// };

// export { User, SingleUser };
export default User;