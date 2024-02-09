import './App.css';
import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import User from "./components/User";
import UserForm from "./components/UserForm";
import UserDetails from './components/UserDetails';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<UserForm />} />
        <Route
          path="/"
          element={
            loading ? (
              <div className='flex justify-center items-center h-[100vh]'>Loading...</div> // Render a loading indicator while fetching data
            ) : (
              <User users={users} />
            )
          }
        />
        <Route path="/:id" element={<UserDetails users={users} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;