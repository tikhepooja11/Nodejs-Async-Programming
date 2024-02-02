const axios = require('axios');

// Function to fetch data from a URL as a Promise
function fetchData(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error.message);
      });
  });
}

// Chaining Promises example
fetchData('https://jsonplaceholder.typicode.com/posts/1')
  .then(post => {
    console.log('Post:', post);
    return fetchData('https://jsonplaceholder.typicode.com/users/' + post.userId);
  })
  .then(user => {
    console.log('User:', user);
    return fetchData('https://jsonplaceholder.typicode.com/comments?postId=1');
  })
  .then(comments => {
    console.log('Comments:', comments);
  })
  .catch(error => {
    console.error('Error:', error);
  });
