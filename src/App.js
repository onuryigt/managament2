import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard'; // Dashboard bileşenini import edin

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dashboard/*" element={<Dashboard />} /> {/* Dashboard route'u güncelleyin */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;