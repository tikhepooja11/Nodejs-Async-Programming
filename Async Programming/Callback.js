//  1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

const callbackFunction = () => {
  console.log("Displyaing after 2000 ms -> Inside callbackFunction ()");
};

const myFunction = (callbackFunction) => {
  console.log("inside myFunction()");
  setTimeout(callbackFunction, 2000);
};

myFunction(callbackFunction);






// another example
const axios = require('axios');

// Function to fetch data from another server using a callback
function fetchDataFromServer(url, callback) {
  // Make an HTTP GET request to the specified URL
  axios.get(url)
    .then(response => {
      // If the request is successful, invoke the callback with the data
      callback(null, response.data);
    })
    .catch(error => {
      // If there's an error, invoke the callback with the error
      callback(error, null);
    });
}

// Example usage of the fetchDataFromServer function
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetchDataFromServer(apiUrl, (error, data) => {
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Data from the server:', data);
  }
});


or

const callback = (error, data) => {
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Data from the server:', data);
  }
}
fetchDataFromServer(apiUrl, callback);

