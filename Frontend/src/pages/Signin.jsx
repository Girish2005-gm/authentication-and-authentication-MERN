import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

function Signin() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError('Email and password are required');
    }

    try {
      const response = await fetch('http://localhost:4000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      });

      const result = await response.json();
      const { success, message, token, user, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', token);
        localStorage.setItem('loggedInUser', user.name);
        setTimeout(() => navigate('/home'), 1500);
      } else if (error?.details) {
        handleError(error.details[0]?.message || 'Validation error');
      } else {
        handleError(message || 'Login failed');
      }

    } catch (err) {
      handleError(err.message || 'Network error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/5 backdrop-blur-sm text-white border border-gray-600 rounded-xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">Login</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm text-gray-300">Password</label>
          <input
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-gray-300">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Signup
          </Link>
        </p>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Signin;
