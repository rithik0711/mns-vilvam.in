import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate, Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

import './App.css';
import Owner from './Owner/Owner.jsx';
import Customer from './Customer/Customer.jsx';
import FloatingBackground from './FloatingBackground';
import Signup from "./Signup/Singup.jsx";

// Owner Components
import OwnerDashboard from './Owner/Dashboard.jsx';
import OwnerOrders from './Owner/Orders.jsx';
import OwnerProducts from './Owner/Products.jsx';
import OwnerCustomers from './Owner/Customers.jsx';
import OwnerPhotos from './Owner/Photos.jsx';

// Customer Components
import CustomerDashboard from './Customer/Dashboard.jsx';
import CustomerProfile from './Customer/Profile.jsx';
import CustomerMyOrders from './Customer/MyOrders.jsx';
import CustomerContactUs from './Customer/ContactUs.jsx';
import CustomerGallery from './Customer/Gallery.jsx';

function Login() {
  const navigate = useNavigate();

  const handleCredentialResponse = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const userEmail = decoded.email;
      const userName = decoded.name;
      const userPic = decoded.picture;

      localStorage.setItem('user', JSON.stringify({
        name: userName,
        email: userEmail,
        picture: userPic,
      }));

      if (userEmail === 'rithikeswaran2005@gmail.com' || userEmail === 'venkatmnsvilvam@gmail.com') {
        navigate('/Owner');
      } else {
        navigate('/Customer');
      }
    } catch (err) {
      console.error("Token decode error:", err);
      alert("Login Failed: Invalid token.");
    }
  };

  return (
    <div className="login-container">
      <FloatingBackground />
      <div className="login-card">
        <div className="logo-wrapper">
          <img src="/images/mns.png" alt="Logo" className="logo" />
        </div>
        <h1 className="welcome-text">Welcome to MNS Vilvam</h1>
        <p className="subtitle">Sign in to your account</p>
        <div className="form">
          <label>Email Address</label>
          <input type="text" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button className="sign-in-btn"><a href="/Customer">Sign In</a></button>
        </div>
        <p className='or'>----- or continue with -----</p>
        <div className="google-login">
          <GoogleLogin
            onSuccess={handleCredentialResponse}
            onError={() => {
              console.log("Login Failed");
              alert("Google login failed. Try again.");
            }}
          />
        </div>

        <p className="register-link">
          Don't have an account? <a href="/Signup">SignUp</a>
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        {/* Owner Routes */}
        <Route path="/Owner" element={<Owner />}>
          <Route index element={<OwnerDashboard />} />
          <Route path="Dashboard" element={<OwnerDashboard />} />
          <Route path="Orders" element={<OwnerOrders />} />
          <Route path="Products" element={<OwnerProducts />} />
          <Route path="Customers" element={<OwnerCustomers />} />
          <Route path="Photos" element={<OwnerPhotos />} />
          <Route path="*" element={<Navigate to="Dashboard" replace />} />
        </Route>

        {/* Customer Routes */}
        <Route path="/Customer" element={<Customer />}>
          <Route index element={<CustomerDashboard />} />
          <Route path="Dashboard" element={<CustomerDashboard />} />
          <Route path="Orders" element={<CustomerMyOrders />} />
          <Route path="Profile" element={<CustomerProfile />} />
          <Route path="ContactUs" element={<CustomerContactUs />} />
          <Route path="Gallery" element={<CustomerGallery />} />
          <Route path="*" element={<Navigate to="Dashboard" replace />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
