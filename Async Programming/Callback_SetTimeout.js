// 2. Write a JavaScript program that converts a callback-based function to a Promise-based function.

const { error } = require("@hapi/joi/lib/base");

const multiplyByTwo = (sortedArray) => {
  const multipliedResult = sortedArray.map((item) => item * 2);
  console.log(multipliedResult);
};

const handleError = (error) => {
  console.log(error);
};

const sortArrayFunction = (arr) => {
  console.log("Delayed by 2 seconds -> inside sort array function");
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
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

const callBackBasedFunction = (arr) => {
  console.log("inside call back based function");
  // Call the callback with the result or error
  setTimeout(() => {
    const sortedArray = sortArrayFunction(arr);
    console.log(sortedArray);
    if (sortedArray.length !== 0) {
      setTimeout(() => {
        multiplyByTwo(sortedArray);
      }, 2000);
    } else {
      const error = new Error("Error callback ...");
      setTimeout(() => {
        handleError(error);
      }, 2000);
    }
  }, 2000);
};

const arr = [5, 8, 10, 6, 1];
callBackBasedFunction(arr);
