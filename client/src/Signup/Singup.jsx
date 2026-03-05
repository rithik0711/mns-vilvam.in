import React, { useState } from 'react';
import './Signup.css';

import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Typography
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FloatingBackground from '../FloatingBackground';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  return (
    <div className="signup-container">
      <FloatingBackground />
      <Typography variant="h5" className="signup-title">
        <img src="./images/mns.png" alt="MNS logo" />
        <h4>Create Account</h4>
      </Typography>

      <TextField
        fullWidth
        margin="normal"
        label="Full Name"
        placeholder="Enter your full name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Email Address"
        placeholder="Enter your email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Phone Number"
        placeholder="Enter your phone number"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        multiline
        rows={2}
        label="Address"
        placeholder="Enter your address"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        type={showPassword ? 'text' : 'password'}
        label="Password"
        placeholder="Create a password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        type={showCPassword ? 'text' : 'password'}
        label="Confirm Password"
        placeholder="Confirm your password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowCPassword(!showCPassword)}>
                {showCPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        fullWidth
        className="signup-button"
        variant="contained"
      >
        Create Account
      </Button>
    </div>
  );
};

export default Signup;
