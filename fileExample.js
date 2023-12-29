var fs = require("fs");
//Asynchronous read
fs.readFile('./input.txt', (error, data) => {
    console.log(`inside synchronous function`);
    if(error)
    {
        console.log('error');
        console.log(error);
    }else
    {
        console.log('\nAsynchronous filedata: '+data.toString());
    }
})
console.log('outside() the async function');
console.log("\n\n");
