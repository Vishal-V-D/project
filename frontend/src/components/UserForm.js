// src/UserForm.js
import React, { useState } from 'react';
import { getAllUsers, deleteUser,createUser } from '../services/UserService'

const UserForm = ({ refreshUsers }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser({ username, password });
      refreshUsers();
    } catch (error) {
      console.error('Error creating user', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;
