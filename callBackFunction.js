const { readSync } = require("fs");
const { request } = require("http");
const { callbackify } = require("util");

console.log("User 1 made a request");
setTimeout(callBack, 5000);  //will call callBack() after 5000 miliseconds/ 5 sec

console.log("User 2 made a request");
setTimeout(callBack, 5000);

console.log("User 3 made a request");
setTimeout(callBack, 5000);

function callBack(){
    console.log(`Queried the database and delivered data in 5 seconds`);
}

//note - 
// client(customer) -> server -> chef
// Asynchronous Approach - 
// 1) If customer send request for pizza to server, server will not wait for the time chef to prepare pizza
// By that time, server will go to another customer to process its request. 
// But to do this, server will set callback() function after sometime, whenever pizza becomes ready, 
// So that server will deliver that prepared pizza to customer 1

// This helps to make server to process multiple request at a sae time instea of blocking its time for next customer. 
// By this way server can process 1000's of request at a time, instead of wasting time only on single client/customer