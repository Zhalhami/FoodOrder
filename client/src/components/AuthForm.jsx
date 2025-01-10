import axios from 'axios';
import { useState } from 'react';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between SignUp and SignIn
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    secretCode: '', // Only for signup
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Login or SignUp)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    // Choose API endpoint based on form type
    const url = isSignUp ? 'http://localhost:5000/api/signup' : 'http://localhost:5000/api/auth';

    try {
      const response = await axios.post(url, formData);

      // If signup is successful, display success message and redirect
      if (isSignUp) {
        setSuccessMessage('Account created successfully! Redirecting to login page...');
        setTimeout(() => {
          setIsSignUp(false);
        }, 3000); 
      } else {
        // Store JWT token and user data in localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        // Redirect based on user role
        if (response.data.user.role === 'admin') {
          window.location.href = '/admin';
        } else {
          window.location.href = '/';
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-heading">{isSignUp ? 'Sign Up' : 'Login'}</h1>

      {successMessage && <p className="auth-success">{successMessage}</p>} 
      {error && <p className="auth-error">{error}</p>} 

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="auth-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="auth-input"
          required
        />

        {/* Only show secretCode field if it's the signup form */}
        {isSignUp && (
          <input
            type="text"
            name="secretCode"
            placeholder="Secret Code"
            value={formData.secretCode}
            onChange={handleChange}
            className="auth-input"
            required
          />
        )}

        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? (isSignUp ? 'Signing Up...' : 'Logging in...') : isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>

      <p className="auth-toggle">
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        <span
          onClick={() => setIsSignUp(!isSignUp)}
          className="auth-toggle-link"
        >
          {isSignUp ? 'Login' : 'Sign Up'}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;
