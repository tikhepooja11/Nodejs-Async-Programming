//  Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.
function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Asynchronous Operation 1");
      resolve();
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Asynchronous Operation 2");
      resolve();
    }, 2000);
  });
}

function asyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Asynchronous Operation 3");
      resolve();
    }, 1500);
  });
}

async function performOperations() {
  try {
    await asyncOperation1();
    await asyncOperation2();
    await asyncOperation3();
    console.log("All operations completed");
  } catch (error) {
    console.log("Error:", error.message);
  }
}

performOperations();





// another example


const axios = require('axios');

// Function to fetch data from a URL using async/await
async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error.message;
  }
}

// Async/Await example
async function fetchDataExample() {
  try {
    const post = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Post:', post);

    const user = await fetchData(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    console.log('User:', user);

    const comments = await fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
    console.log('Comments:', comments);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Calling the async function
fetchDataExample();

