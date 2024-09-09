// src/components/Login.jsx
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    try {
      // Submit login data to the backend (replace URL with your backend endpoint)
      const response = await axios.post('/api/login', { email, password });
      
      // Handle successful login (e.g., save token, redirect to dashboard)
      console.log('Login successful:', response.data);
      setError('');
    } catch (err) {
      console.error('Error during login:', err);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
