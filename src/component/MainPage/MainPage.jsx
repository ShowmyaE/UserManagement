import React, { useState, useEffect } from 'react';

import axios from 'axios';
import UserList from '../UserList/UserList'
import UserForm from '../UserForm/UserForm';
import Error from '../Error';


// Main App Component
const MainPage = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);
  
  // Fetch users on component mount
  useEffect(() => {
    const token=localStorage.getItem('token')
    axios.get('https://backentusermanagement.onrender.com/users', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
    })
      .then(response => setUsers(response.data))
      .catch(err => setError('Failed to load users'));
  }, [users]);

  // Handle adding or updating a user
  const handleAddOrUpdateUser = (user) => {
    if (user.id) {
      // Update user
      axios.put(`https://backentusermanagement.onrender.com/users/${user.id}`, user)
        .then(response => {
          setUsers(users.map(u => u.id === user.id ? response.data : u));
          setIsEditing(false);
        })
        .catch(err => setError('Failed to update user'));
    } else {
      // Add user
      axios.post('https://backentusermanagement.onrender.com/users', user)
        .then(response => {
          setUsers([...users, response.data]);
          setIsEditing(false);
        })
        .catch(err => setError('Failed to add user'));
    }
  };

  return (
    
     
    
     <div className="App">
      {error && <Error message={error} />}
      <h1>User Management</h1>
      {isEditing ?
        <UserForm user={selectedUser} handleAddOrUpdateUser={handleAddOrUpdateUser} /> :
        <UserList users={users} setSelectedUser={setSelectedUser} setIsEditing={setIsEditing} />}
    </div> 
    
  );
};

export default MainPage;