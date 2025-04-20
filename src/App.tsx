import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "@/components";
import "@/styles/App.css";
import LogInForm from "./components/LogInForm";
import SignupForm from "./components/SignupForm";
import MainPage from "./components/MainPage";
import ForgotStep1 from "./components/ForgotStep1";
import ForgotStep2 from "./components/ForgotStep2";
import ForgotStep3 from "./components/ForgotStep3";

// Define a type for the user
interface User {
  isAuthenticated: boolean;
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Only set isAuthenticated to true if we're certain the user is logged in
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    setUser({ isAuthenticated });
  }, []);

  const updateAuthStatus = (isAuthenticated: boolean) => {
    setUser({ isAuthenticated });
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());
  };

  const LoggedInRoutes = () => (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );

  const NotLoggedInRoutes = () => (
    <Routes>
      <Route path="/sign-up" element={<SignupForm />} />
      <Route path="/forgot-password" element={<ForgotStep1 />} />
      <Route path="/forgot-password-step2" element={<ForgotStep2 />} />
      <Route path="/forgot-password-step3" element={<ForgotStep3 />} />
      <Route path="*" element={<LogInForm updateAuthStatus={updateAuthStatus} />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <AppLayout>
        {user?.isAuthenticated ? <LoggedInRoutes /> : <NotLoggedInRoutes />}
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
