1. Simplified Routing: Involves manual checks for request url and request method as well
2. Middleware - provides middleware feature in order to perform some actions while the http request is being processed
  1. use for providing logs, warnings, error handling (with error handling middlewares - (err,req,res,next)), url request bodies, authenting using authentication middlewares.
  2. Built in middlewares - express.json(), express.urlencoded({ extended: true }), express.static() to serve static files,express.Router()  , 
     third party middlewares - bodyParser.json() - use to parse req bodies, app.use(cookieParser())- use to parse cookies attached with request, app.use(cors()) - use to enable cross origin resource sharing.
3. Static File Serving - needs the manual static files serving with node js, express provides middleware for static file serving like app.static(static)
4. Error Handling: -  needs manual error handling which can be very complex task as requires careful considerations which can be error prone , express provides a dedicated error-handling middleware
5. Built in web server - node js just provides basic http server but express simplifies the process of creating feature-rich server for web apps
    
// Node.js without Express -  // manual checks for request url
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/home') {     
    res.end('Welcome to the home page!');
  } else if (req.url === '/about') {
    res.end('About us page');
  } else {
    res.end('404 Not Found');
  }
});

// Express.js
const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/about', (req, res) => {
  res.send('About us page');
});


//  manual checks for request methods
// Node.js 
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Handle GET request
  } else if (req.method === 'POST') {
    // Handle POST request
  }
  // Other code...
});


// Express.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Handle GET request
});

app.post('/', (req, res) => {
  // Handle POST request
});

--------------------------------------------------------------
2.  // Express.js (using middleware)
const express = require('express');
const app = express();

// Built-in middleware for logging
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});


--------------------------------------------------------------
3. 
  // Node.js without Express (simplified example)
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/static/file.txt') {
    const content = fs.readFileSync('./static/file.txt', 'utf8');
    res.end(content);
  }
});


// Express.js (using express.static)
const express = require('express');
const app = express();

// Serve static files from the 'static' directory
app.use('/static', express.static('static'));

------------------------------------------------------------
4.
  // Node.js without Express (simplified example)
const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Code that might throw an error
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});


// Express.js
const express = require('express');
const app = express();

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});


