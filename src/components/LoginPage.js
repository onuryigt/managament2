import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://managament-nz32.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        navigate('/dashboard');  // Giriş başarılı olduğunda Dashboard'a yönlendirme
      } else {
        const error = await response.json();
        setError(error.message || 'Login failed');
        console.error('Error during login:', error);
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Error during login:', err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h4" gutterBottom>
          Giriş Yap
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Kullanıcı Adı"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Şifre"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Giriş Yap
          </Button>
          {error && <Typography color="error">{error}</Typography>}
        </form>
      </Box>
    </Container>
  );
}

export default LoginPage;