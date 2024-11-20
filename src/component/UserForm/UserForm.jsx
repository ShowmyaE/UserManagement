import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm = ({ user, handleAddOrUpdateUser }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    department: ''
  });
  const navigate = useNavigate(); 

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    //e.preventDefault();
    handleAddOrUpdateUser(formData);
    //navigate('/users');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" />
      <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" />
      <button type="submit"  >{user ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;