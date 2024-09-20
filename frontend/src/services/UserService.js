// src/UserService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/users';

export const createUser = async (user) => {
  return await axios.post(API_URL, user);
};

export const getUser = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const getAllUsers = async () => {
  return await axios.get(API_URL);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
