// 2. Write a JavaScript program that converts a callback-based function to a Promise-based function.

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

const callBackBasedFunction = (arr) => {
  console.log("inside call back based function");
  setTimeout(() => {
    const sortedArray = sortArrayFunction(arr);
    console.log(sortedArray);
  }, 2000);
};

const arr = [5, 8, 10, 6, 1];
callBackBasedFunction(arr);
