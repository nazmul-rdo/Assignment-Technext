import React, { useContext, useRef } from "react";
import { UsersContext } from '../App';
import { Link, useNavigate } from "react-router-dom";

const NewUser = () => {
  const { sortedUsers, addUser } = useContext(UsersContext);
  const navigate = useNavigate();

  const firstNameRef = useRef(null);
  const middleNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const companyNameRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const streetRef = useRef(null);
  const suiteRef = useRef(null);
  const cityRef = useRef(null);
  const eyeColorRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      address: {
        address: streetRef.current.value,
        city: cityRef.current.value,
      },
      company: {
        name: companyNameRef.current.value,
      },
      email: emailRef.current.value,
      eyeColor: eyeColorRef.current.value,
      firstName: firstNameRef.current.value,
      gender: genderRef.current.value,
      id: sortedUsers.length + 1,
      lastName: lastNameRef.current.value,
      maidenName: middleNameRef.current.value,
    };
    addUser(newUser);
    navigate('/');
  };

  return (
    <div>
      <button className="fixed top-4 left-8 bg-blue-500 text-btn_primary rounded-r-md hover:bg-blue-600 focus:outline-none mt-4">
        <Link
          to={'/'}
          className="bg-white py-2.5 px-8 rounded hover:ml-4 duration-75"
          aria-label=""
        >
          Back to Users
        </Link>
      </button>

      <div className="max-w-md mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
              ref={firstNameRef}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="middleName">
              Middle Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="middleName"
              type="text"
              placeholder="Middle Name"
              ref={middleNameRef}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
              ref={lastNameRef}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
              Company Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyName"
              type="text"
              placeholder="Company Name"
              ref={companyNameRef}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              ref={emailRef}
              required
            />
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                Gender
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="gender"
                ref={genderRef}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street">
                Street
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="street"
                type="text"
                placeholder="Street"
                ref={streetRef}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="suite">
                Suite
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="suite"
                type="text"
                placeholder="Suite"
                ref={suiteRef}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                City
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="City"
                ref={cityRef}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eyeColor">
              Eye Color
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="eyeColor"
              type="text"
              placeholder="Eye Color"
              ref={eyeColorRef}
              required
            />
          </div>
          <div className="flex items-center justify-center">
          <button
              className="bg-btn_primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-lg"
              aria-label=""
              type="submit"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;