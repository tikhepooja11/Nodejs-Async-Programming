//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

const promiseAllExample = (urls) => {
  const mutiplePromises = urls.map((url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Http error : " + response.status);
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
  return Promise.all(mutiplePromises);
};
const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/users/3",
];

promiseAllExample(urls)
  .then((data) => {
    console.log("Downloaded contents:", data);
  })
  .catch((error) => {
    console.log(error);
  });
