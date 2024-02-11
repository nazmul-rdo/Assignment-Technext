import React, { useContext, useRef } from "react";

import { UsersContext } from '../App';

const NewUser = ({ addUser }) => {

    const {sortedUsers} =useContext(UsersContext)

    console.log(sortedUsers.length)
    const firstNameRef = useRef(null);
    const middleNameRef = useRef(null);
    const lastNameRef = useRef(null);

    const handleSubmit = (event) => {

        event.preventDefault();
        const newUser = {
            address: {
                address: '49548 Road 200',
                city: "O'Neals",
                state: 'CA'
            },
            company: {
                address: { /* address object contents */ },
                department: 'Product Management',
                name: 'Bruen and Sons',
                title: 'Structural Analysis Engineer'
            },
            email: "jissetts@hostgator.com",
            eyeColor: "Amber",
            firstName: firstNameRef.current.value,
            gender: "female",
            hair: { color: 'Black', type: 'Straight' },
            id: sortedUsers.length +1,
            image: "https://robohash.org/Macy.png?set=set4",
            lastName: lastNameRef.current.value,
            macAddress: "D7:14:C5:45:69:C1",
            maidenName: middleNameRef.current.value,
            phone: "+81 915 649 2384",
            username: "jissetts",

        };
        addUser(newUser);
    };



    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h2>Add New User</h2>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" ref={firstNameRef} />
                </div>
                <div>
                    <label htmlFor="middleName">Middle Name:</label>
                    <input type="text" id="middleName" ref={middleNameRef} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" ref={lastNameRef} />
                </div>




                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default NewUser;