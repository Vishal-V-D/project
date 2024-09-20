import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserList from './components/UserList'; // Assuming you have a UserList component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm/>} />
        <Route path="/dashboard" element={<UserList />} /> {/* Assuming UserList is your dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
