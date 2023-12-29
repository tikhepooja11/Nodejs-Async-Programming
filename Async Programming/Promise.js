const sortArrayFunction = (arr) => {
  console.log("Delayed by 2 seconds -> inside sort array function");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const promiseBasedFunction = (arr) => {
  const promise = new Promise((resolve, reject) => {
    if (!arr || arr.length === 0) {
      const error = new Error("Array is empty");
      reject(error);
    } else {
      // callback based function
      setTimeout(() => {
        const sortedArray = sortArrayFunction(arr);
        resolve(sortedArray);
      }, 2000);
    }
  });
  return promise;
};

const arr = [5, 8, 10, 6, 1];

promiseBasedFunction(arr)
  .then((sortedArray) => console.log(sortedArray))
  .catch((error) => console.log(error));
