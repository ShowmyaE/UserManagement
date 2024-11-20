import React from 'react';
import axios from 'axios';

const UserList = ({ users, setSelectedUser, setIsEditing, setUsers, setError }) => {
  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    axios.delete(`https://backentusermanagement.onrender.com/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
        
      })
      .catch(err => console.log("Failed to delete", err));
  };

  return (
    <div>
      <h2>User List</h2>
      <button onClick={() => setIsEditing(true)}>Add New User</button>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.first_name} {user.last_name} - {user.email}</p>
          <button onClick={() => handleEdit(user)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;