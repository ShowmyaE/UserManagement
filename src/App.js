import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import LoginPage from './component/Login/Login'
import SignUpPage from './component/signup/signup';
import MainPage from './component/MainPage/MainPage';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';

// Main App Component
const App = () => {
  return (
    <Router>
     <Routes> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/" element={<SignUpPage />} />
        <Route 
        path="/users" 
        element={
          // <ProtectedRoute>
          //   <MainPage />
          // </ProtectedRoute>
          <ProtectedRoute element={MainPage} />
        } 
      />
      {/* <ProtectedRoute 
        path="/users" 
        element={
          
            <MainPage />
        } 
      /> */}
    </Routes>
    </Router>
  );
};

export default App;