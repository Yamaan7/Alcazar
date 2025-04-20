import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ForgotStep1 from './ForgotStep1';
import ForgotStep2 from './ForgotStep2';
import ForgotStep3 from './ForgotStep3';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/forgot-password" element={<ForgotStep1 />} />
                <Route path="/forgot-password/step2" element={<ForgotStep2 />} />
                <Route path="/forgot-password/step3" element={<ForgotStep3 />} />
            </Routes>
        </Router>
    );
}

export default App;
