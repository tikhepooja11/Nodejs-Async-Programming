//  Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

const makeHttpData = (url) => {
  const promise = new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Http Error : " + response.status);
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
  return promise;
};

makeHttpData("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error.message));
