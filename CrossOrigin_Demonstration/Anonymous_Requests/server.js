// server.js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // Enable CORS for all routes

app.get('/api/data', (req, res) => {
  const responseData = {
    message: 'Data from the server',
  };

  res.json(responseData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
