//  client.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [responseData, setResponseData] = useState('');

  // Make a cross-origin request with anonymous credentials
  const fetchAnonymousData = async () => {
    const response = await fetch('http://localhost:5000/api/data');
    const data = await response.json();
    setResponseData(data.message);
  };


  useEffect(() => {
    // Fetch data when the component mounts
    fetchAnonymousData();
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <p>Data from the server: {responseData}</p>
      <button onClick={fetchAnonymousData}>Fetch Anonymous Data</button>
    </div>
  );
};

export default App;
