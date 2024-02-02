Pipes is node js module used to connect output of one stream as input to another stream. Used to transfer data from one location to another location without manually managing data flow.

  example
const fs = require('fs');

// a readable stream from a file
const readableStream = fs.createReadStream('input.txt');

// writable stream to a new file
const writableStream = fs.createWriteStream('output.txt');

// Pipe the data from the readable stream to the writable stream
readableStream.pipe(writableStream);



//   Piping with Transform Stream:

const fs = require('fs');
const { Transform } = require('stream');

// Transform stream to convert text to uppercase
const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
// Pipe the data through the uppercase transform stream and then to the writable stream
readableStream.pipe(uppercaseTransform).pipe(writableStream);
