import React, { useContext, useRef } from "react";
import { UsersContext } from '../App';

const NewUser = ({ addUser }) => {
  const { sortedUsers } = useContext(UsersContext);

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
        state: 'CA',
      },
      company: {
        address: { /* address object contents */ },
        department: 'Product Management',
        name: companyNameRef.current.value,
        title: 'Structural Analysis Engineer',
      },
      email: emailRef.current.value,
      eyeColor: eyeColorRef.current.value,
      firstName: firstNameRef.current.value,
      gender: genderRef.current.value,
      hair: { color: 'Black', type: 'Straight' },
      id: sortedUsers.length + 1,
      image: "https://robohash.org/Macy.png?set=set4",
      lastName: lastNameRef.current.value,
      maidenName: middleNameRef.current.value,
      phone: "+81 915 649 2384",
      username: "jissetts",
    };
    addUser(newUser);
  };

  return (
  <div>
      <div className="max-w-md mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
            ref={firstNameRef}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="middleName">
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
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
            Gender
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gender"
            ref={genderRef}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street">
            Street
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="street"
            type="text"
            placeholder="Street"
            ref={streetRef}
          />
        </div>
        <div className="mb-4">
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
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            placeholder="City"
            ref={cityRef}
          />
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
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default NewUser;