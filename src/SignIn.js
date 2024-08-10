import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.email = email ? '' : 'Email is required';
        tempErrors.email = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Email is not valid';
        tempErrors.password = password ? '' : 'Password is required';
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === '');
    };

    const handleSignIn = () => {
        if (validate()) {
            // If validation passes, store the email in local storage
            localStorage.setItem('email', email);
            alert('Validation successful. Sign in now.');
            // Implement your sign-in logic here
            console.log('Email:', email);
            console.log('Password:', password);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box mt={8} display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h4" gutterBottom>
                    Sign In
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
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSignIn}
                    style={{ marginTop: '16px' }}
                >
                    Sign In
                </Button>
                <Link to="/signup" style={{ marginTop: '16px', textDecoration: 'none' }}>
                    Don't have an account? Sign Up
                </Link>
            </Box>
        </Container>
    );
};

export default SignIn;
