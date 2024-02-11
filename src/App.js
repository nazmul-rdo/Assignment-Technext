
import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import NewUser from "./components/NewUser";

export const UsersContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter((user) => {
      const fullName = `${user.firstName} ${user.maidenName} ${user.lastName}`.toLowerCase();
      const searchName = searchQuery.toLowerCase().split(" ");
      return searchName.every((e) => fullName.includes(e));
    });

    let sortedUsers = [...filteredUsers];

    if (sortOption === "name") {
      sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (sortOption === "email") {
      sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
    } else if (sortOption === "company") {
      sortedUsers.sort((a, b) => a.company.name.localeCompare(b.company.name));
    }

    setSortedUsers(sortedUsers);
  }, [users, searchQuery, sortOption]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    console.log(users)
  };

  return (
    <BrowserRouter>

      <UsersContext.Provider value={{
        searchQuery,
        handleSearchInputChange,
        handleSortOptionChange,
        sortOption,
        sortedUsers

      }}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none">
          <Link to={'/'} >Add User</Link>
        </button>

        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <div className="flex justify-center items-center h-[100vh]">Loading...</div>
              ) : (
                <User users={users} />
              )
            }
          />
          <Route path="/:id" element={<UserDetails />} />
          <Route path="/adduser" element={<NewUser addUser={addUser} />} />
        </Routes>

      </UsersContext.Provider>
    </BrowserRouter>
  );
}

export default App;