import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Home() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
      navigate('/signin');
    }
    setLoggedInUser(user);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged out');
    setTimeout(() => navigate('/signin'), 1000);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/product', {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      const result = await response.json();
      setProducts(result);
    } catch (err) {
      handleError(err.message || 'Failed to load products');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100 text-black">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome, {loggedInUser}</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 gap-4">
        {products.map((item, index) => (
          <div key={index} className="bg-white p-4 shadow rounded">
            <p className="text-lg font-medium">{item.name}</p>
            <p className="text-gray-600">Price: ₹{item.price}</p>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}

export default Home;
