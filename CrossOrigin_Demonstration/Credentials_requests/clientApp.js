// App.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [responseData, setResponseData] = useState('');

  // Make a cross-origin request with JWT token as credentials
  const fetchDataWithToken = async () => {
    try {
      // Retrieve the JWT token from your authentication mechanism (e.g., localStorage)
      const token = localStorage.getItem('jwtToken');

      if (!token) {
        throw new Error('JWT token not found.');
      }

      const response = await fetch('http://localhost:5000/api/data', {
        credentials: 'include', // Include credentials (cookies)
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
        },
      });

      if (!response.ok) {
        throw new Error(`Server response not OK: ${response.status}`);
      }

      const data = await response.json();
      setResponseData(data.message);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchDataWithToken();
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <p>Data from the server: {responseData}</p>

      <button onClick={fetchDataWithToken}>Fetch Data with JWT Token</button>
    </div>
  );
};

export default App;
