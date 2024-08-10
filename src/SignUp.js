import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.email = email ? '' : 'Email is required';
        tempErrors.email = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Email is not valid';
        tempErrors.password = password ? '' : 'Password is required';
        tempErrors.confirmPassword = confirmPassword ? '' : 'Confirm Password is required';
        tempErrors.confirmPassword = confirmPassword && password === confirmPassword ? '' : 'Passwords do not match';
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === '');
    };

    const handleSignUp = () => {
        if (validate()) {
            // If validation passes, save data to local storage and show an alert
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            alert('successful signup.');
            // Implement your sign-up logic here
            console.log('Email:', email);
            console.log('Password:', password);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box mt={8} display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!errors.password}
                    helperText={errors.password}
                />
                <TextField
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSignUp}
                    style={{ marginTop: '16px' }}
                >
                    Sign Up
                </Button>
                <Link to="/signin" style={{ marginTop: '16px', textDecoration: 'none' }}>
                    Already have an account? Sign In
                </Link>
            </Box>
        </Container>
    );
};

export default SignUp;
