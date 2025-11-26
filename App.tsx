import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import GeminiAssistant from './components/GeminiAssistant';
import RoleSwitcher from './components/RoleSwitcher';
import { MOCK_USERS } from './constants';
import { User, UserRole } from './types';
import { initGemini } from './services/geminiService';

// Pages
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import EShop from './pages/EShop';
import Service from './pages/Service';
import Partner from './pages/Partner';
import Profile from './pages/Profile';

const App: React.FC = () => {
  // State for user context (simulating login)
  const [currentUser, setCurrentUser] = useState<User>(MOCK_USERS.SME);

  // Initialize Gemini Service on mount
  useEffect(() => {
    initGemini();
  }, []);

  const handleRoleChange = (role: UserRole) => {
    // Switch mock user data based on role
    switch (role) {
      case UserRole.KA:
        setCurrentUser(MOCK_USERS.KA);
        break;
      case UserRole.PARTNER:
        setCurrentUser(MOCK_USERS.PARTNER);
        break;
      case UserRole.SME:
      default:
        setCurrentUser(MOCK_USERS.SME);
        break;
    }
  };

  const handleLogout = () => {
    alert("Logout simulation");
  };

  return (
    <Router>
      <Layout user={currentUser} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Home user={currentUser} />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/eshop" element={<EShop user={currentUser} />} />
          <Route path="/service" element={<Service />} />
          
          {/* Protected Partner Route */}
          <Route 
            path="/partner" 
            element={
              currentUser.role === UserRole.PARTNER 
                ? <Partner /> 
                : <Navigate to="/" replace />
            } 
          />
          
          <Route path="/profile" element={<Profile user={currentUser} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      
      {/* Global Features */}
      <GeminiAssistant />
      <RoleSwitcher currentRole={currentUser.role} onChange={handleRoleChange} />
    </Router>
  );
};

export default App;
