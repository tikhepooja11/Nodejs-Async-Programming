//  Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

const axios = require("axios");

const fetchDataWithPromise = () => {
  console.log("fetching data with promise");
  const promise = new Promise((resolve, reject) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
  return promise;
};

fetchDataWithPromise()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

const fetchDataWithAsyncAwait = async () => {
  console.log("fetching data with async await");
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

setTimeout(() => {
  fetchDataWithAsyncAwait();
}, 3000);

//    Note -> The axios.get method returns a promise, so you need to use .then and .catch to handle the asynchronous result.
//    Additionally, when you are using the axios.get method, there is no response.data immediately available. It will be available after some times, thats why we need to either write in async await using try-catch block or we have to use promise block just as above
