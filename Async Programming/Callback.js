//  1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

const callbackFunction = () => {
  console.log("Displyaing after 2000 ms -> Inside callbackFunction ()");
};

const myFunction = (callbackFunction) => {
  console.log("inside myFunction()");
  setTimeout(callbackFunction, 2000);
};

myFunction(callbackFunction);
