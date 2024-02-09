import './App.css'
import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import User from "./components/User";
import UserForm from "./components/UserForm";
import UserDetails from './components/UserDetails';

function App() {
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data.users);
      });
  }, []);


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/test" element={<UserForm />} />
          <Route path="/" element={<User users={users} />} />
          <Route path='/:id' element={<UserDetails users={users} />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;