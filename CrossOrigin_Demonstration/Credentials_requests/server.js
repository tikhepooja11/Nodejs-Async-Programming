// server.js
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Replace with the origin of your React app
  credentials: true,
}));

app.get('/api/data', (req, res) => {
  // Set Access-Control-Allow-Credentials header
  res.header('Access-Control-Allow-Credentials', true);

  // Dummy user data / dummy authentication logic
  const user = {
    id: 123,
    username: 'exampleUser',
  };

  // Sign a JWT token
  const token = jwt.sign({ user }, 'your-secret-key', { expiresIn: '1h' });

  // Set the token as a cookie (secure, httpOnly, and sameSite options can be adjusted based on your requirements)
  res.cookie('jwtToken', token, { maxAge: 3600000, httpOnly: true });

  const responseData = {
    message: 'Data from the server',
  };

  res.json(responseData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
